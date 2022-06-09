import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { getUrqlClient } from '~/client'
import type {
  CreateWarehouseReceiveMutation,
  CreateWarehouseReceiveMutationVariables,
  ShipmentListQuery,
  ShipmentListQueryVariables,
  WarehouseReceiveShipmentInput,
} from '~/generated/graphql'
import { getDocument } from '~/queries'

export const loader: LoaderFunction = async ({ request }) => {
  const { searchParams } = new URL(request.url)
  const trackingNumber = searchParams.get('trackingNumber')?.trim() || ''
  const document = getDocument('common/ShipmentList')
  const { data, error } = await getUrqlClient()
    .query<ShipmentListQuery, ShipmentListQueryVariables>(document, {
      filter: { trackingNumber: { ilike: `%${trackingNumber}` } },
    })
    .toPromise()

  if (error) {
    throw new Response(error.message, { status: 400 })
  }

  return json({ data, error })
}

export const action: LoaderFunction = async ({ request }) => {
  const formData = await request.formData()
  const items: WarehouseReceiveShipmentInput[] = []
  for (const shipmentId of formData.keys()) {
    const shippingCost = formData.get(shipmentId)?.toString()
    if (shippingCost) {
      items.push({
        shipmentId,
        shippingCost: parseInt(shippingCost),
        images: [],
      })
    }
  }
  const document = getDocument('createWarehouseReceive')
  const { data, error } = await getUrqlClient()
    .mutation<
      CreateWarehouseReceiveMutation,
      CreateWarehouseReceiveMutationVariables
    >(document, { data: { items } })
    .toPromise()

  return json({ data, error })
}
