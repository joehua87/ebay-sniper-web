import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { getUrqlClient } from '~/client'
import type {
  ScrapeListingMutation,
  ScrapeListingMutationVariables,
} from '~/generated/graphql'
import { getDocument } from '~/queries'

export const action: LoaderFunction = async ({ request }) => {
  const formData = await request.formData()
  const listingQueryId = formData.get('listing_query_id')?.toString()

  if (!listingQueryId) {
    throw new Response('Missing listing_query_id params', { status: 400 })
  }

  const document = getDocument('scrapeListing')
  const { data, error } = await getUrqlClient()
    .mutation<ScrapeListingMutation, ScrapeListingMutationVariables>(document, {
      listingQueryId,
    })
    .toPromise()

  if (error) {
    throw new Response(error.message, { status: 400 })
  }

  return json({ data, error })
}
