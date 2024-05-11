/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { getNewsUrl } from '@/config/url.config'
import { INewsApiRes } from '@/types/interfaces/news.interface'
import NewsList from './NewsList'

async function getNewsData<T>(page: number): Promise<T> {
  const res = await fetch(getNewsUrl(process.env.API_KEY!, page), {
    next: { revalidate: 3 },
  })

  if (!res.ok) {
    console.error(res)
    throw new Error(`Failed to fetch data - ${res.statusText}`)
  }

  const jsonRes: T = await res.json()
  return jsonRes
}

export default async function Dashboard({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = Array.isArray(searchParams['page']) ? 1 : parseInt(searchParams['page'] ?? '1')
  const news = await getNewsData<INewsApiRes>(page ?? 1)
  return (
    <div className="p-6">
      <NewsList data={news} page={page} />
    </div>
  )
}
