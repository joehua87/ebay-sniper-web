import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getUrqlClient } from '~/client'
import type {
  ListingsPageQuery,
  ListingsPageQueryVariables,
} from '~/generated/graphql'
import { getDocument } from '~/queries'

export default function ListingsPage() {
  const data = useLoaderData<ListingsPageQuery>()

  return (
    <div className="p-4">
      {data.listings.entities.map((item) => (
        <div key={item.id} className="pb-2 mb-2 border-b">
          <div className="font-bold text-gray-700">{item.title}</div>
          <div className="text-sm text-gray-500">{item.price}</div>
          <div className="text-sm text-gray-500">{item.listingAt}</div>
          <div className="text-sm text-gray-500">
            {item.purchaseOptions.join(', ')}
          </div>
        </div>
      ))}
    </div>
  )
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const document = getDocument('ListingsPage')

  const { data, error } = await getUrqlClient()
    .query<ListingsPageQuery, ListingsPageQueryVariables>(document, {})
    .toPromise()

  if (error) {
    throw new Response(error.message, { status: 400 })
  }

  return data
}
