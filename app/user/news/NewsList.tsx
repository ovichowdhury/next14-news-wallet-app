'use client'

import { aggregateNewsByDate } from '@/lib/utils/news.utils'
import { INewsApiRes } from '@/types/interfaces/news.interface'
import React, { useEffect, useMemo } from 'react'
import News from './News'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { setArticles, setPage, setTotalResults } from '@/lib/redux/features/news/news.slice'
import Pagination from '@/app/components/Pagination'
import { useRouter } from 'next/navigation'

interface NewsListProps {
  data: INewsApiRes
  page: number
}

export default function NewsList({ data, page }: NewsListProps) {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const articles = useAppSelector((state) => state.news.articles)
  const currentPage = useAppSelector((state) => state.news.currentPage)
  const aggData = useMemo(() => aggregateNewsByDate(articles), [articles])

  useEffect(() => {
    dispatch(setTotalResults(data.totalResults))
    dispatch(setArticles(data.articles))
    dispatch(setPage(page))
  }, [data])

  const onPageChange = (p: number) => {
    router.push(`/user/news?page=${p}`)
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {Object.entries(aggData).map(([key, values]) => (
        <div key={key} className="flex flex-col w-full gap-2 pb-4">
          <p className="text-xl font-light italic border-b border-gray-300">{key}</p>
          <div className="flex gap-4 flex-wrap justify-center items-center">
            {values.map((v, i) => (
              <News data={v} key={i} />
            ))}
          </div>
        </div>
      ))}
      <Pagination
        onPageChange={onPageChange}
        currentPage={currentPage}
        totalPages={Math.ceil(data.totalResults / 30)}
      />
    </div>
  )
}
