import { Client } from '@urql/core'

export const getUrqlClient = () =>
  new Client({ url: 'http://localhost:9000/graphql' })
