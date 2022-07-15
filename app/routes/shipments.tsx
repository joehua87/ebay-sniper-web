import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData, useSearchParams } from '@remix-run/react'
import { IconLink } from '@tabler/icons'
import clsx from 'clsx'
import { getUrqlClient } from '~/client'
import { Money } from '~/components/Money'
import type {
  ShipmentsPageQuery,
  ShipmentsPageQueryVariables,
} from '~/generated/graphql'
import { OrderDirection } from '~/generated/graphql'
import { getDocument } from '~/queries'

export default function ShipmentsPage() {
  const [searchParams, updateSearchParams] = useSearchParams()
  const state = searchParams.get('state') || 'paid'
  const data = useLoaderData<ShipmentsPageQuery>()

  const statesMap = data.shipmentAggregate.reduce(
    (
      acc: Record<string, { count: number; total: number }>,
      { state, count, total },
    ) => ({
      ...acc,
      [state]: { count, total },
    }),
    {},
  )
  const states = ['paid', 'shipped', 'delivered', 'inventory', 'received']

  return (
    <div className="p-4">
      <div>{data.shipments.paging.totalEntities} items</div>
      <button
        onClick={() => {
          const message = data.shipments.entities
            .map((x) => `${x.trackingNumber}\t${x.deliveredAt}`)
            .join('\n')
          console.log(message)
        }}
      >
        Console.log
      </button>
      <div className="grid grid-cols-5">
        {states.map((s) => {
          const count = statesMap[s]?.count || 0
          const total = statesMap[s]?.total || 0
          const active = state == s

          return (
            <button
              className={clsx('block rounded', {
                'border-2 border-indigo-500': active,
              })}
              key={s}
              onClick={() => updateSearchParams({ ...searchParams, state: s })}
            >
              <div className="flex items-center justify-center">
                <span className="font-bold text-gray-700">{s}</span>
                <span className="ml-2 text-sm text-gray-500">{count}</span>
              </div>
              <Money
                currency="VND"
                className="text-xs font-semibold text-indigo-700"
                value={total}
              />
            </button>
          )
        })}
      </div>
      <div className="mt-4">
        <div className="text-xs">
          <div className="flex gap-2 pb-1 mb-1 font-semibold text-gray-600 border-b">
            <div className="w-48">Tracking</div>
            <div className="w-16">Account</div>
            <div className="w-16">Inventory</div>
            <div className="w-72">Order</div>
            <div className="w-20 pr-4 text-right">Value</div>
            <div className="w-24">Shipped</div>
            <div className="w-24">Delivered</div>
            <div className="w-24">Received</div>
            <div className="w-24">Current Step</div>
          </div>
          {data.shipments.entities.map((x) => (
            <div key={x.id} className="flex gap-2 pb-1 mb-1 border-b">
              <div className="w-48">
                <span className="flex items-center">
                  <a
                    className="mr-1 text-gray-700"
                    target="_blank"
                    href={`https://order.ebay.com/ord/show?orderId=${x.order.id}#/`}
                    rel="noreferrer"
                  >
                    <IconLink className="w-4 h-4" />
                  </a>

                  {x.trackingNumber}
                </span>
              </div>
              <div className="w-16">{x.order.account.username}</div>
              <div className="w-16">{x.order.inventory.provider}</div>
              <div className="w-72">
                {x.order.items.map((x) => (
                  <div
                    key={x.title}
                    className="mb-1 truncate opacity-75 last:mb-0"
                    title={x.title}
                  >
                    <span className="px-1 mr-2 border rounded">
                      {x.quantity}
                    </span>
                    <span>{x.title}</span>
                  </div>
                ))}
              </div>
              <div className="w-20 pr-4 text-right">
                <Money currency="VND" value={x.value} />
              </div>
              <div className="w-24">{x.shippedAt}</div>
              <div className="w-24">{x.deliveredAt}</div>
              <div className="w-24">{x.receivedAt}</div>
              <div className="w-24">{x.currentStep}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const loader: LoaderFunction = async ({ request }) => {
  const { searchParams } = new URL(request.url)
  const document = getDocument('ShipmentsPage')
  const state = searchParams.get('state') || 'paid'

  const { data, error } = await getUrqlClient()
    .query<ShipmentsPageQuery, ShipmentsPageQueryVariables>(document, {
      filter: { state: { eq: state } },
      orderBy: [
        { direction: OrderDirection.Desc, field: getDefaultSortField(state) },
      ],
    })
    .toPromise()
  console.log(data, error?.graphQLErrors[0])
  if (error) {
    throw new Response(error.message, { status: 400 })
  }

  return data
}

function getDefaultSortField(state: string) {
  switch (state) {
    case 'received':
    case 'inventory':
      return 'received_at'
    case 'delivered':
      return 'delivered_at'
    case 'shipped':
    case 'paid':
    default:
      return 'paid_at'
  }
}
