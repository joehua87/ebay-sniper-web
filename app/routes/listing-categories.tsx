import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getUrqlClient } from '~/client'
import type {
  ListingCategoriesPageQuery,
  ListingCategoriesPageQueryVariables,
} from '~/generated/graphql'
import { getDocument } from '~/queries'

export default function ListingCategoriesPage() {
  const data = useLoaderData<ListingCategoriesPageQuery>()

  return (
    <div className="p-4">
      {data.listingCategories.entities.map((item) => (
        <div key={item.id} className="mb-2 pb-2 border-b">
          <div className="font-bold text-gray-700">{item.name}</div>
          <div className="text-sm text-gray-500">{item.path}</div>
        </div>
      ))}
    </div>
  )
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const document = getDocument('ListingCategoriesPage')

  const { data, error } = await getUrqlClient()
    .query<ListingCategoriesPageQuery, ListingCategoriesPageQueryVariables>(
      document,
      {},
    )
    .toPromise()

  if (error) {
    throw new Response(error.message, { status: 400 })
  }

  return data
}
