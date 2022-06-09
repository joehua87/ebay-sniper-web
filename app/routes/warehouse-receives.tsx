import type { LoaderFunction } from '@remix-run/node'
import { getUrqlClient } from '~/client'
import type { CreateWarehouseReceiveMutation } from '~/generated/graphql'
import { OrderDirection } from '~/generated/graphql'
import type {
  WarehouseReceivesPageQuery,
  WarehouseReceivesPageQueryVariables,
  ShipmentListQuery,
} from '~/generated/graphql'
import { getDocument } from '~/queries'
import { useFetcher, useLoaderData } from '@remix-run/react'
import type { OperationResult } from '@urql/core'
import { useMemo, useState } from 'react'
import { omit } from 'ramda'

function WarehouseReceiveForm() {
  const data = useLoaderData<WarehouseReceivesPageQuery>()
  const shipmentListFetcher = useFetcher<OperationResult<ShipmentListQuery>>()
  const createFetcher =
    useFetcher<OperationResult<CreateWarehouseReceiveMutation>>()

  const [receiveShipments, setReceiveShipments] = useState<
    Record<string, number>
  >({})

  const shipmentIds = useMemo(
    () => Object.keys(receiveShipments),
    [receiveShipments],
  )

  return (
    <div>
      <div>
        {data.warehouseReceives.entities.map((x) => (
          <div key={x.id}>
            <div className="flex justify-between">
              <div>{x.id}</div>
              <div>{x.valueTotal}</div>
              <div>{x.shippingTotal}</div>
              <div>{x.total}</div>
            </div>
            <div>
              {x.shipments.map((item) => (
                <div key={item.id} className="flex">
                  <div className="w-64">{item.shipment.trackingNumber}</div>
                  <div>{item.shippingCost}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <shipmentListFetcher.Form
        action="/api/shipments"
        method="get"
        onChange={(e) => {
          shipmentListFetcher.submit(e.currentTarget)
        }}
      >
        <input name="trackingNumber" className="border" />
      </shipmentListFetcher.Form>
      {shipmentListFetcher.data?.data?.shipments?.entities.map((item) => (
        <div key={item.id}>
          {item.trackingNumber}{' '}
          <button
            disabled={shipmentIds.includes(item.id)}
            onClick={() => {
              setReceiveShipments({
                ...receiveShipments,
                [item.id]: 0,
              })
            }}
          >
            Add
          </button>
        </div>
      ))}
      <createFetcher.Form action="/api/shipments" method="post">
        {shipmentIds.map((shipmentId, index) => {
          const shippingCost = receiveShipments[shipmentId]
          return (
            <div key={shipmentId}>
              <input
                value={shippingCost}
                name={shipmentId}
                type="number"
                onChange={(e) => {
                  setReceiveShipments({
                    ...receiveShipments,
                    [shipmentId]: parseInt(e.target.value),
                  })
                }}
              />
              <button
                onClick={() => {
                  setReceiveShipments(omit(['id'], receiveShipments))
                }}
              >
                Delete
              </button>
            </div>
          )
        })}
      </createFetcher.Form>
    </div>
  )
}

export default function WarehouseReceivesPage() {
  return (
    <div>
      WarehouseReceivesPage
      <WarehouseReceiveForm />
    </div>
  )
}

export const loader: LoaderFunction = async ({ request }) => {
  const document = getDocument('WarehouseReceivesPage')

  const { data, error } = await getUrqlClient()
    .query<WarehouseReceivesPageQuery, WarehouseReceivesPageQueryVariables>(
      document,
      {
        // filter: { state: { eq: state } },
        orderBy: [{ direction: OrderDirection.Desc, field: 'created_at' }],
      },
    )
    .toPromise()

  if (error) {
    throw new Response(error.message, { status: 400 })
  }

  return data
}
