'use client'

import { aggregateNewsByDate } from '@/lib/utils/news.utils'
import { INewsApiRes } from '@/types/interfaces/news.interface'
import React, { useEffect, useMemo } from 'react'
import News from './News'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { setArticles, setTotalResults } from '@/lib/redux/features/news/news.slice'

interface NewsListProps {
  data: INewsApiRes
}

export default function NewsList({ data }: NewsListProps) {
  const dispatch = useAppDispatch()
  const articles = useAppSelector((state) => state.news.articles)
  const aggData = useMemo(() => aggregateNewsByDate(articles), [articles])

  useEffect(() => {
    dispatch(setTotalResults(data.totalResults))
    dispatch(setArticles(data.articles))
  }, [data])

  return (
    <div className="flex flex-col justify-start items-start gap-4">
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
    </div>
  )
}
