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
  NaiveDateTime: any;
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

export type RootQueryType = {
  __typename?: 'RootQueryType';
  listingCategories: ListingCategoryListResult;
  orders: OrderListResult;
};


export type RootQueryTypeListingCategoriesArgs = {
  filter?: InputMaybe<ListingCategoryFilterInput>;
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

export type PagingFragment = { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number };

export type ListingCategoriesPageQueryVariables = Exact<{ [key: string]: never; }>;


export type ListingCategoriesPageQuery = { __typename?: 'RootQueryType', listingCategories: { __typename?: 'ListingCategoryListResult', entities: Array<{ __typename?: 'ListingCategory', id: string, name?: string | null, path: Array<string> }>, paging: { __typename?: 'Paging', page: number, pageSize: number, totalEntities: number, totalPages: number } } };
