// Strapi v5 default response wrappers.
// See: https://docs.strapi.io/dev-docs/api/rest

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiMeta {
  pagination?: StrapiPagination;
}

export interface StrapiResponse<T> {
  data: T;
  meta: StrapiMeta;
}

export interface StrapiError {
  status: number;
  name: string;
  message: string;
  details?: unknown;
}
