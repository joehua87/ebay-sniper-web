import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getUrqlClient } from '~/client'
import { Money } from '~/components/Money'
import type {
  OrdersPageQuery,
  OrdersPageQueryVariables,
} from '~/generated/graphql'
import { OrderDirection } from '~/generated/graphql'
import { getDocument } from '~/queries'

export default function OrdersPage() {
  const data = useLoaderData<OrdersPageQuery>()

  return (
    <div className="p-4 bg-indigo-100">
      <div>{data.orders.paging.totalEntities} items</div>
      <div>
        {data.orders.entities.map((item) => (
          <div key={item.id} className="p-2 mb-4 bg-white rounded">
            <div className="">{item.id}</div>
            <div className="">{item.date}</div>
            <div>{item.inventory.provider}</div>
            <div className="">{item.seller.username}</div>
            <div className="mt-4">
              <h3>Items</h3>
              <div className="text-xs">
                <div className="flex gap-2 pb-1 mb-1 font-semibold text-gray-600 border-b">
                  <div className="w-96">Title</div>
                  <div className="w-24">Qty</div>
                  <div className="w-24">Price</div>
                  <div className="w-24">Items</div>
                  <div className="w-24">Shipping</div>
                  <div className="w-24">Total</div>
                </div>
                {item.items.map((x) => (
                  <div key={x.itemId} className="flex gap-2 pb-1 mb-1 border-b">
                    <div className="w-96">{x.title}</div>
                    <div className="w-24">{x.quantity}</div>
                    <div className="w-24">
                      <Money value={x.price} />
                    </div>
                    <div className="w-24">
                      <Money value={x.itemsTotal} />
                    </div>
                    <div className="w-24">
                      <Money value={x.shippingCost} />
                    </div>
                    <div className="w-24">
                      <Money value={x.total} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h3>Shipments</h3>
              <div className="text-xs">
                <div className="flex gap-2 pb-1 mb-1 font-semibold text-gray-600 border-b">
                  <div className="w-96">Tracking</div>
                  <div className="w-24">Shipped</div>
                  <div className="w-24">Delivered</div>
                  <div className="w-24">Received</div>
                  <div className="w-24">Current Step</div>
                </div>
                {item.shipments.map((x) => (
                  <div key={x.id} className="flex gap-2 pb-1 mb-1 border-b">
                    <div className="w-96">{x.trackingNumber}</div>
                    <div className="w-24">{x.shippedAt}</div>
                    <div className="w-24">{x.deliveredAt}</div>
                    <div className="w-24">{x.receivedAt}</div>
                    <div className="w-24">{x.currentStep}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const loader: LoaderFunction = async () => {
  const document = getDocument('OrdersPage')

  const { data, error } = await getUrqlClient()
    .query<OrdersPageQuery, OrdersPageQueryVariables>(document, {
      orderBy: [{ direction: OrderDirection.Desc, field: 'date' }],
    })
    .toPromise()
  console.log(data, error?.graphQLErrors[0])
  if (error) {
    throw new Response(error.message, { status: 400 })
  }

  return data
}
