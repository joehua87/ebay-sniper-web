import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { getUrqlClient } from '~/client'
import type {
  UpdateListingMutation,
  UpdateListingMutationVariables,
} from '~/generated/graphql'
import { getDocument } from '~/queries'

export const action: LoaderFunction = async ({ request }) => {
  const formData = await request.formData()
  const id = formData.get('id')?.toString()

  if (!id) {
    throw new Response('Missing id params', { status: 400 })
  }

  const document = getDocument('updateListing')
  const { data, error } = await getUrqlClient()
    .mutation<UpdateListingMutation, UpdateListingMutationVariables>(document, {
      id,
    })
    .toPromise()

  if (error) {
    throw new Response(error.message, { status: 400 })
  }

  return json({ data, error })
}
