export interface SessionsSearchResponse {
  results: Sessions[];
}

export interface Sessions{
  quarter: string,
  id: number,
  subject: string,
  watched: boolean
}
