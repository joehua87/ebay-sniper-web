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

export type Listing = {
  __typename?: 'Listing';
  attributes?: Maybe<Scalars['Json']>;
  bidsCount?: Maybe<Scalars['Int']>;
  buyItNowPrice?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  images: Array<Scalars['String']>;
  listingAt?: Maybe<Scalars['DateTime']>;
  location?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  purchaseOptions: Array<Scalars['String']>;
  returns?: Maybe<Scalars['Boolean']>;
  sellerId: Scalars['ID'];
  shippingPrice?: Maybe<Scalars['Int']>;
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
  accountId: Scalars['ID'];
  date?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  internalState?: Maybe<Scalars['String']>;
  inventoryId: Scalars['ID'];
  itemsTotal?: Maybe<Scalars['Int']>;
  orderItems: Array<OrderItem>;
  sellerId: Scalars['ID'];
  shipments: Array<Shipment>;
  shippingCost?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
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
  name?: InputMaybe<StringFilterInput>;
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
  scrapeListing?: Maybe<Array<Listing>>;
};


export type RootMutationTypeScrapeListingArgs = {
  listingQueryId: Scalars['ID'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  listingCategories: ListingCategoryListResult;
  listingQueries: ListingQueryListResult;
  listings: ListingListResult;
  orders: OrderListResult;
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

export type Shipment = {
  __typename?: 'Shipment';
  currentStep?: Maybe<Scalars['Int']>;
  deliveredAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  paidAt?: Maybe<Scalars['Date']>;
  placedAt?: Maybe<Scalars['NaiveDateTime']>;
  receivedAt?: Maybe<Scalars['Date']>;
  shippedAt?: Maybe<Scalars['Date']>;
  shippingService?: Maybe<Scalars['String']>;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['NaiveDateTime']>;
};

export type StringFilterInput = {
  eq?: InputMaybe<Scalars['String']>;
  ilike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  like?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
};

export type ListingCategoryRowFragment = { __typename?: 'ListingCategory', id: string, name?: string | null, path: Array<string> };

export type ListingQueryRowFragment = { __typename?: 'ListingQuery', id: string, url: string, searchParams: any, config: any };

export type ListingRowFragment = { __typename?: 'Listing', id: string, title: string, image?: string | null, condition?: string | null, price?: number | null, shippingPrice?: number | null, purchaseOptions: Array<string>, location?: string | null, listingAt?: any | null, returns?: boolean | null, buyItNowPrice?: number | null, bidsCount?: number | null };

export type PagingFragment = { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number };

export type ScrapeListingMutationVariables = Exact<{
  listingQueryId: Scalars['ID'];
}>;


export type ScrapeListingMutation = { __typename?: 'RootMutationType', scrapeListing?: Array<{ __typename?: 'Listing', id: string }> | null };

export type ListingCategoriesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingCategoriesPageQuery = { __typename?: 'RootQueryType', listingCategories: { __typename?: 'ListingCategoryListResult', entities: Array<{ __typename?: 'ListingCategory', id: string, name?: string | null, path: Array<string> }>, paging: { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number } } };

export type ListingQueriesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingQueriesPageQuery = { __typename?: 'RootQueryType', listingQueries: { __typename?: 'ListingQueryListResult', entities: Array<{ __typename?: 'ListingQuery', id: string, url: string, searchParams: any, config: any }>, paging: { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number } } };

export type ListingsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingsPageQuery = { __typename?: 'RootQueryType', listings: { __typename?: 'ListingListResult', entities: Array<{ __typename?: 'Listing', id: string, title: string, image?: string | null, condition?: string | null, price?: number | null, shippingPrice?: number | null, purchaseOptions: Array<string>, location?: string | null, listingAt?: any | null, returns?: boolean | null, buyItNowPrice?: number | null, bidsCount?: number | null }>, paging: { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number } } };
