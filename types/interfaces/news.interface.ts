export interface INews {
  source: {
    id: number | null
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

export interface INewsApiRes {
  status: string
  totalResults: number
  articles: INews[]
}

export interface IAggregatedNews {
  [key: string]: INews[]
}
