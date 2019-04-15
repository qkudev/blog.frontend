declare interface IPost {
  _id: string
  body: string
  createdAt: string
  updatedAt: string
  __v: number
}

declare interface Pagination {
  page: number
  limit: number
  pages: number
  total: number
}

declare interface PaginatedResponse<T> {
  docs: T[]
  pagination: Pagination
}

declare interface LoadableState {
  loading: boolean
  error?: any
}

declare interface IAction<T extends string, P> {
  type: T
  payload: P
}

declare type InitAction = IAction<'@@INIT', undefined>
