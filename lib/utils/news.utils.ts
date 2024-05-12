import { IAggregatedNews, INews } from '@/types/interfaces/news.interface'

export function aggregateNewsByDate(news: INews[]): IAggregatedNews {
  const result: IAggregatedNews = {}
  for (const n of news) {
    const pDate = new Date(n.publishedAt)
    const yyyy = pDate.getFullYear()
    const mm = pDate.getMonth() + 1
    const dd = pDate.getDate()
    const date = `${yyyy}-${mm.toString().length <= 1 ? '0' + mm : mm}-${dd.toString().length <= 1 ? '0' + dd : dd}`
    if (result[date] === undefined) result[date] = [n]
    else result[date].push(n)
  }
  return result
}

export function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
