import type { LoaderFunction } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { getUrqlClient } from '~/client'
import type {
  ListingQueriesPageQuery,
  ListingQueriesPageQueryVariables,
} from '~/generated/graphql'
import { getDocument } from '~/queries'

export default function ListingQueriesPage() {
  const data = useLoaderData<ListingQueriesPageQuery>()

  return (
    <div className="p-4">
      {data.listingQueries.entities.map((item) => (
        <div key={item.id} className="mb-2 pb-2 border-b">
          <div className="font-bold text-gray-700">{item.url}</div>
          <Form action="/api/listings" method="post">
            <input type="hidden" name="listing_query_id" value={item.id} />
            <button type="submit">Get listing</button>
          </Form>
        </div>
      ))}
    </div>
  )
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const document = getDocument('ListingQueriesPage')

  const { data, error } = await getUrqlClient()
    .query<ListingQueriesPageQuery, ListingQueriesPageQueryVariables>(
      document,
      {},
    )
    .toPromise()

  if (error) {
    throw new Response(error.message, { status: 400 })
  }

  return data
}
