export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Json: any;
  NaiveDateTime: any;
};

export type Account = {
  __typename?: 'Account';
  cookie?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type DateFilterInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  neq?: InputMaybe<Scalars['Date']>;
};

export type IdFilterInput = {
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
  __typename?: 'Image';
  caption?: Maybe<Scalars['String']>;
  id: Scalars['String'];
};

export type ImageInput = {
  caption?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

export type IntegerFilterInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  neq?: InputMaybe<Scalars['Int']>;
};

export type Inventory = {
  __typename?: 'Inventory';
  id: Scalars['ID'];
  provider: Scalars['String'];
};

export type Listing = {
  __typename?: 'Listing';
  attributes?: Maybe<Scalars['Json']>;
  auctionPrice?: Maybe<Scalars['Int']>;
  bidsCount?: Maybe<Scalars['Int']>;
  buyItNowPrice?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  images: Array<Scalars['String']>;
  listingAt?: Maybe<Scalars['DateTime']>;
  listingEndAt?: Maybe<Scalars['DateTime']>;
  location?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  purchaseOptions: Array<Scalars['String']>;
  returns?: Maybe<Scalars['String']>;
  seller?: Maybe<User>;
  sellerId?: Maybe<Scalars['ID']>;
  shippingPrice: Scalars['Int'];
  stock?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type ListingCategory = {
  __typename?: 'ListingCategory';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  path: Array<Scalars['String']>;
};

export type ListingCategoryFilterInput = {
  name?: InputMaybe<StringFilterInput>;
};

export type ListingCategoryListResult = {
  __typename?: 'ListingCategoryListResult';
  entities: Array<ListingCategory>;
  paging: Paging;
};

export type ListingFilterInput = {
  name?: InputMaybe<StringFilterInput>;
};

export type ListingListResult = {
  __typename?: 'ListingListResult';
  entities: Array<Listing>;
  paging: Paging;
};

export type ListingQuery = {
  __typename?: 'ListingQuery';
  accountId?: Maybe<Scalars['ID']>;
  config: Scalars['Json'];
  id: Scalars['ID'];
  searchParams: Scalars['Json'];
  url: Scalars['String'];
};

export type ListingQueryFilterInput = {
  name?: InputMaybe<StringFilterInput>;
};

export type ListingQueryListResult = {
  __typename?: 'ListingQueryListResult';
  entities: Array<ListingQuery>;
  paging: Paging;
};

export type Order = {
  __typename?: 'Order';
  account: Account;
  accountId: Scalars['ID'];
  date: Scalars['Date'];
  id: Scalars['ID'];
  internalState: Scalars['String'];
  inventory: Inventory;
  inventoryId: Scalars['ID'];
  items: Array<OrderItem>;
  itemsTotal: Scalars['Int'];
  seller: User;
  sellerId: Scalars['ID'];
  shipments: Array<Shipment>;
  shippingCost: Scalars['Int'];
  state: Scalars['String'];
  total: Scalars['Int'];
  website?: Maybe<Scalars['String']>;
};

export type OrderByInput = {
  direction: OrderDirection;
  field: Scalars['String'];
  fieldType?: InputMaybe<OrderFieldType>;
};

export enum OrderDirection {
  Asc = 'ASC',
  AscNullsFirst = 'ASC_NULLS_FIRST',
  AscNullsLast = 'ASC_NULLS_LAST',
  Desc = 'DESC',
  DescNullsFirst = 'DESC_NULLS_FIRST',
  DescNullsLast = 'DESC_NULLS_LAST'
}

export enum OrderFieldType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Datetime = 'DATETIME',
  Decimal = 'DECIMAL',
  Integer = 'INTEGER',
  Time = 'TIME'
}

export type OrderFilterInput = {
  id?: InputMaybe<IdFilterInput>;
  internalState?: InputMaybe<StringFilterInput>;
  inventoryId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  sellerId?: InputMaybe<IdFilterInput>;
  state?: InputMaybe<StringFilterInput>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  itemId: Scalars['String'];
  itemsTotal: Scalars['Int'];
  orderId: Scalars['ID'];
  price: Scalars['Int'];
  quantity: Scalars['Int'];
  shippingCost: Scalars['Int'];
  title: Scalars['String'];
  total: Scalars['Int'];
};

export type OrderListResult = {
  __typename?: 'OrderListResult';
  entities: Array<Order>;
  paging: Paging;
};

export type Paging = {
  __typename?: 'Paging';
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalEntities: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type PagingInput = {
  page?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  createWarehouseReceive: WarehouseReceive;
  scrapeListing: Array<Listing>;
  updateListing: Listing;
};


export type RootMutationTypeCreateWarehouseReceiveArgs = {
  data: WarehouseReceiveInput;
};


export type RootMutationTypeScrapeListingArgs = {
  listingQueryId: Scalars['ID'];
};


export type RootMutationTypeUpdateListingArgs = {
  id: Scalars['ID'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  listingCategories: ListingCategoryListResult;
  listingQueries: ListingQueryListResult;
  listings: ListingListResult;
  orders: OrderListResult;
  shipmentAggregate: Array<ShipmentAggregateItem>;
  shipments: ShipmentListResult;
  warehouseReceives: WarehouseReceiveListResult;
};


export type RootQueryTypeListingCategoriesArgs = {
  filter?: InputMaybe<ListingCategoryFilterInput>;
  orderBy?: InputMaybe<Array<OrderByInput>>;
  paging?: InputMaybe<PagingInput>;
};


export type RootQueryTypeListingQueriesArgs = {
  filter?: InputMaybe<ListingQueryFilterInput>;
  orderBy?: InputMaybe<Array<OrderByInput>>;
  paging?: InputMaybe<PagingInput>;
};


export type RootQueryTypeListingsArgs = {
  filter?: InputMaybe<ListingFilterInput>;
  orderBy?: InputMaybe<Array<OrderByInput>>;
  paging?: InputMaybe<PagingInput>;
};


export type RootQueryTypeOrdersArgs = {
  filter?: InputMaybe<OrderFilterInput>;
  orderBy?: InputMaybe<Array<OrderByInput>>;
  paging?: InputMaybe<PagingInput>;
};


export type RootQueryTypeShipmentsArgs = {
  filter?: InputMaybe<ShipmentFilterInput>;
  orderBy?: InputMaybe<Array<OrderByInput>>;
  paging?: InputMaybe<PagingInput>;
};


export type RootQueryTypeWarehouseReceivesArgs = {
  filter?: InputMaybe<WarehouseReceiveFilterInput>;
  orderBy?: InputMaybe<Array<OrderByInput>>;
  paging?: InputMaybe<PagingInput>;
};

export type Shipment = {
  __typename?: 'Shipment';
  currentStep?: Maybe<Scalars['Int']>;
  deliveredAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  order: Order;
  orderId: Scalars['ID'];
  paidAt?: Maybe<Scalars['Date']>;
  placedAt?: Maybe<Scalars['NaiveDateTime']>;
  receivedAt?: Maybe<Scalars['Date']>;
  shippedAt?: Maybe<Scalars['Date']>;
  state?: Maybe<Scalars['String']>;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
  value: Scalars['Int'];
};

export type ShipmentAggregateItem = {
  __typename?: 'ShipmentAggregateItem';
  count: Scalars['Int'];
  state: Scalars['String'];
  total: Scalars['Int'];
};

export type ShipmentFilterInput = {
  currentStep?: InputMaybe<IntegerFilterInput>;
  deliveredAt?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  paidAt?: InputMaybe<DateFilterInput>;
  receivedAt?: InputMaybe<DateFilterInput>;
  shippedAt?: InputMaybe<DateFilterInput>;
  shippingService?: InputMaybe<StringFilterInput>;
  state?: InputMaybe<StringFilterInput>;
  trackingNumber?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<IntegerFilterInput>;
};

export type ShipmentListResult = {
  __typename?: 'ShipmentListResult';
  entities: Array<Shipment>;
  paging: Paging;
};

export type StringFilterInput = {
  eq?: InputMaybe<Scalars['String']>;
  ilike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  like?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  feedbackText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  negativeFeedback?: Maybe<Scalars['Int']>;
  neutralFeedback?: Maybe<Scalars['Int']>;
  positiveFeedback?: Maybe<Scalars['Int']>;
  receivedAsSellerFeedback?: Maybe<Scalars['Int']>;
  registeredAt?: Maybe<Scalars['NaiveDateTime']>;
  totalFeedback?: Maybe<Scalars['Int']>;
  username: Scalars['String'];
};

export type WarehouseReceive = {
  __typename?: 'WarehouseReceive';
  id: Scalars['ID'];
  shipments: Array<WarehouseReceiveShipment>;
  shippingTotal: Scalars['Int'];
  total: Scalars['Int'];
  valueTotal: Scalars['Int'];
};

export type WarehouseReceiveFilterInput = {
  name?: InputMaybe<StringFilterInput>;
};

export type WarehouseReceiveInput = {
  items: Array<WarehouseReceiveShipmentInput>;
};

export type WarehouseReceiveListResult = {
  __typename?: 'WarehouseReceiveListResult';
  entities: Array<WarehouseReceive>;
  paging: Paging;
};

export type WarehouseReceiveShipment = {
  __typename?: 'WarehouseReceiveShipment';
  id: Scalars['ID'];
  images: Array<Image>;
  order: Order;
  orderId: Scalars['ID'];
  shipment: Shipment;
  shipmentId: Scalars['ID'];
  shippingCost: Scalars['Int'];
  warehouseReceiveId: Scalars['ID'];
};

export type WarehouseReceiveShipmentInput = {
  images: Array<ImageInput>;
  shipmentId: Scalars['ID'];
  shippingCost: Scalars['Int'];
};

export type ListingCategoryRowFragment = { __typename?: 'ListingCategory', id: string, name?: string | null, path: Array<string> };

export type ListingQueryRowFragment = { __typename?: 'ListingQuery', id: string, url: string, searchParams: any, config: any };

export type ListingRowFragment = { __typename?: 'Listing', id: string, title: string, image?: string | null, condition?: string | null, stock?: number | null, price: number, shippingPrice: number, purchaseOptions: Array<string>, location?: string | null, listingAt?: any | null, listingEndAt?: any | null, returns?: string | null, buyItNowPrice?: number | null, currency?: string | null, bidsCount?: number | null, sellerId?: string | null, seller?: { __typename?: 'User', id: string, username: string, totalFeedback?: number | null, feedbackText?: string | null } | null };

export type OrderRowFragment = { __typename?: 'Order', id: string, state: string, date: any, inventoryId: string, sellerId: string, account: { __typename?: 'Account', username: string }, inventory: { __typename?: 'Inventory', id: string, provider: string }, seller: { __typename?: 'User', id: string, username: string }, shipments: Array<{ __typename?: 'Shipment', id: string, paidAt?: any | null, shippedAt?: any | null, deliveredAt?: any | null, receivedAt?: any | null, trackingNumber?: string | null, currentStep?: number | null }>, items: Array<{ __typename?: 'OrderItem', itemId: string, title: string, price: number, quantity: number, itemsTotal: number, shippingCost: number, total: number }> };

export type PagingFragment = { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number };

export type ShipmentItemFragment = { __typename?: 'Shipment', id: string, orderId: string, value: number, paidAt?: any | null, shippedAt?: any | null, deliveredAt?: any | null, receivedAt?: any | null, trackingNumber?: string | null, currentStep?: number | null, order: { __typename?: 'Order', id: string, total: number } };

export type ShipmentRowFragment = { __typename?: 'Shipment', id: string, orderId: string, value: number, paidAt?: any | null, shippedAt?: any | null, deliveredAt?: any | null, receivedAt?: any | null, trackingNumber?: string | null, currentStep?: number | null, order: { __typename?: 'Order', id: string, total: number, state: string, date: any, inventoryId: string, sellerId: string, account: { __typename?: 'Account', username: string }, inventory: { __typename?: 'Inventory', id: string, provider: string }, seller: { __typename?: 'User', id: string, username: string }, shipments: Array<{ __typename?: 'Shipment', id: string, paidAt?: any | null, shippedAt?: any | null, deliveredAt?: any | null, receivedAt?: any | null, trackingNumber?: string | null, currentStep?: number | null }>, items: Array<{ __typename?: 'OrderItem', itemId: string, title: string, price: number, quantity: number, itemsTotal: number, shippingCost: number, total: number }> } };

export type WarehouseReceiveRowFragment = { __typename?: 'WarehouseReceive', id: string, valueTotal: number, shippingTotal: number, total: number, shipments: Array<{ __typename?: 'WarehouseReceiveShipment', id: string, shipmentId: string, shippingCost: number, shipment: { __typename?: 'Shipment', id: string, orderId: string, value: number, paidAt?: any | null, shippedAt?: any | null, deliveredAt?: any | null, receivedAt?: any | null, trackingNumber?: string | null, currentStep?: number | null, order: { __typename?: 'Order', id: string, total: number } }, images: Array<{ __typename?: 'Image', id: string, caption?: string | null }> }> };

export type CreateWarehouseReceiveMutationVariables = Exact<{
  data: WarehouseReceiveInput;
}>;


export type CreateWarehouseReceiveMutation = { __typename?: 'RootMutationType', createWarehouseReceive: { __typename?: 'WarehouseReceive', id: string } };

export type ScrapeListingMutationVariables = Exact<{
  listingQueryId: Scalars['ID'];
}>;


export type ScrapeListingMutation = { __typename?: 'RootMutationType', scrapeListing: Array<{ __typename?: 'Listing', id: string }> };

export type UpdateListingMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UpdateListingMutation = { __typename?: 'RootMutationType', updateListing: { __typename?: 'Listing', id: string } };

export type ListingCategoriesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingCategoriesPageQuery = { __typename?: 'RootQueryType', listingCategories: { __typename?: 'ListingCategoryListResult', entities: Array<{ __typename?: 'ListingCategory', id: string, name?: string | null, path: Array<string> }>, paging: { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number } } };

export type ListingQueriesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingQueriesPageQuery = { __typename?: 'RootQueryType', listingQueries: { __typename?: 'ListingQueryListResult', entities: Array<{ __typename?: 'ListingQuery', id: string, url: string, searchParams: any, config: any }>, paging: { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number } } };

export type ListingsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingsPageQuery = { __typename?: 'RootQueryType', listings: { __typename?: 'ListingListResult', entities: Array<{ __typename?: 'Listing', id: string, title: string, image?: string | null, condition?: string | null, stock?: number | null, price: number, shippingPrice: number, purchaseOptions: Array<string>, location?: string | null, listingAt?: any | null, listingEndAt?: any | null, returns?: string | null, buyItNowPrice?: number | null, currency?: string | null, bidsCount?: number | null, sellerId?: string | null, seller?: { __typename?: 'User', id: string, username: string, totalFeedback?: number | null, feedbackText?: string | null } | null }>, paging: { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number } } };

export type OrdersPageQueryVariables = Exact<{
  orderBy?: InputMaybe<Array<OrderByInput> | OrderByInput>;
}>;


export type OrdersPageQuery = { __typename?: 'RootQueryType', orders: { __typename?: 'OrderListResult', entities: Array<{ __typename?: 'Order', id: string, state: string, date: any, inventoryId: string, sellerId: string, account: { __typename?: 'Account', username: string }, inventory: { __typename?: 'Inventory', id: string, provider: string }, seller: { __typename?: 'User', id: string, username: string }, shipments: Array<{ __typename?: 'Shipment', id: string, paidAt?: any | null, shippedAt?: any | null, deliveredAt?: any | null, receivedAt?: any | null, trackingNumber?: string | null, currentStep?: number | null }>, items: Array<{ __typename?: 'OrderItem', itemId: string, title: string, price: number, quantity: number, itemsTotal: number, shippingCost: number, total: number }> }>, paging: { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number } } };

export type ShipmentsPageQueryVariables = Exact<{
  filter?: InputMaybe<ShipmentFilterInput>;
  orderBy?: InputMaybe<Array<OrderByInput> | OrderByInput>;
}>;


export type ShipmentsPageQuery = { __typename?: 'RootQueryType', shipmentAggregate: Array<{ __typename?: 'ShipmentAggregateItem', state: string, count: number, total: number }>, shipments: { __typename?: 'ShipmentListResult', entities: Array<{ __typename?: 'Shipment', id: string, orderId: string, value: number, paidAt?: any | null, shippedAt?: any | null, deliveredAt?: any | null, receivedAt?: any | null, trackingNumber?: string | null, currentStep?: number | null, order: { __typename?: 'Order', id: string, total: number, state: string, date: any, inventoryId: string, sellerId: string, account: { __typename?: 'Account', username: string }, inventory: { __typename?: 'Inventory', id: string, provider: string }, seller: { __typename?: 'User', id: string, username: string }, shipments: Array<{ __typename?: 'Shipment', id: string, paidAt?: any | null, shippedAt?: any | null, deliveredAt?: any | null, receivedAt?: any | null, trackingNumber?: string | null, currentStep?: number | null }>, items: Array<{ __typename?: 'OrderItem', itemId: string, title: string, price: number, quantity: number, itemsTotal: number, shippingCost: number, total: number }> } }>, paging: { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number } } };

export type WarehouseReceivesPageQueryVariables = Exact<{
  filter?: InputMaybe<WarehouseReceiveFilterInput>;
  orderBy?: InputMaybe<Array<OrderByInput> | OrderByInput>;
}>;


export type WarehouseReceivesPageQuery = { __typename?: 'RootQueryType', warehouseReceives: { __typename?: 'WarehouseReceiveListResult', entities: Array<{ __typename?: 'WarehouseReceive', id: string, valueTotal: number, shippingTotal: number, total: number, shipments: Array<{ __typename?: 'WarehouseReceiveShipment', id: string, shipmentId: string, shippingCost: number, shipment: { __typename?: 'Shipment', id: string, orderId: string, value: number, paidAt?: any | null, shippedAt?: any | null, deliveredAt?: any | null, receivedAt?: any | null, trackingNumber?: string | null, currentStep?: number | null, order: { __typename?: 'Order', id: string, total: number } }, images: Array<{ __typename?: 'Image', id: string, caption?: string | null }> }> }>, paging: { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number } } };

export type ShipmentListQueryVariables = Exact<{
  filter?: InputMaybe<ShipmentFilterInput>;
  orderBy?: InputMaybe<Array<OrderByInput> | OrderByInput>;
}>;


export type ShipmentListQuery = { __typename?: 'RootQueryType', shipments: { __typename?: 'ShipmentListResult', entities: Array<{ __typename?: 'Shipment', id: string, orderId: string, value: number, paidAt?: any | null, shippedAt?: any | null, deliveredAt?: any | null, receivedAt?: any | null, trackingNumber?: string | null, currentStep?: number | null, order: { __typename?: 'Order', id: string, total: number } }>, paging: { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number } } };
