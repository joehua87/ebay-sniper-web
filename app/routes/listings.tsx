import type { LoaderFunction } from '@remix-run/node'
import { useFetcher, useLoaderData } from '@remix-run/react'
import { getUrqlClient } from '~/client'
import numeral from 'numeral'
import type {
  ListingsPageQuery,
  ListingsPageQueryVariables,
} from '~/generated/graphql'
import { getDocument } from '~/queries'

function Price({ value, className }: { value: number; className?: string }) {
  return (
    <span className={className}>{numeral(value / 100).format('$0,0.00')}</span>
  )
}

export default function ListingsPage() {
  const data = useLoaderData<ListingsPageQuery>()
  const fetcher = useFetcher()

  return (
    <div className="p-4">
      <div>{data.listings.paging.totalEntities} items</div>
      <div>
        {data.listings.entities.map((item) => (
          <div key={item.id} className="flex pb-2 mb-2 border-b">
            <div className="w-32">
              <figure className="aspect-w-1 aspect-h-1">
                <img
                  className="object-contain bg-gray-100 border rounded"
                  alt={item.title}
                  src={`https://i.ebayimg.com/thumbs/images/g/${item.image}.jpg`}
                />
              </figure>
            </div>
            <div className="pl-4">
              <a
                target="_blank"
                href={`https://www.ebay.com/itm/${item.id}`}
                rel="noreferrer"
              >
                Go to
              </a>
              <div className="text-gray-700">{item.title}</div>
              <div className="text-sm text-gray-500">{item.condition}</div>
              <Price className="font-bold text-gray-900" value={item.price} />
              <div className="text-sm text-gray-500">{item.currency}</div>
              <div className="text-sm text-gray-500">{item.listingAt}</div>
              <div className="text-sm text-gray-500">
                {item.purchaseOptions.join(', ')}
              </div>
              {item.seller && (
                <div>
                  Seller:
                  <span className="ml-2">{item.seller.username}</span>
                  <span className="ml-2">
                    {item.seller.feedbackText} ({item.seller.totalFeedback})
                  </span>
                </div>
              )}
              <fetcher.Form action={`/api/listings/${item.id}`} method="post">
                <input type="hidden" name="id" value={item.id} />
                <button type="submit">Update</button>
              </fetcher.Form>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const document = getDocument('ListingsPage')

  const { data, error } = await getUrqlClient()
    .query<ListingsPageQuery, ListingsPageQueryVariables>(document, {})
    .toPromise()
  console.log(data, error?.graphQLErrors[0])
  if (error) {
    throw new Response(error.message, { status: 400 })
  }

  return data
}
