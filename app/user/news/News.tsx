'use client'
import React from 'react'
import Image from 'next/image'
import { INews } from '@/types/interfaces/news.interface'
import { TbListDetails } from 'react-icons/tb'
import { MdDeleteOutline, MdEditNote } from 'react-icons/md'

interface NewsProps {
  data: INews
}

export default function News({ data }: NewsProps) {
  return (
    <div className="w-full md:w-80 h-64 flex flex-col gap-1 border border-gray-200 rounded-md overflow-hidden bg-gradient-to-r from-gray-50  to-white shadow-lg hover:shadow-xl hover:bg-gradient-to-l transition ease-in-out duration-300 delay-150 hover:cursor-pointer">
      <div className="flex-1 h-1/2 overflow-hidden">
        <Image
          src={data.urlToImage ?? '/img/placeholder.jpg'}
          alt="News Image"
          title="Banner Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          placeholder="blur"
          blurDataURL="/img/placeholder.jpg"
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col gap-1 p-2 flex-1 h-1/2">
        <div>
          <p className="text-gray-700 font-semibold">{data.author}</p>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-700 text-sm font-semibold">{data.source.name}</p>
          <p className="text-gray-700 text-sm font-semibold px-2 border-l border-l-slate-400">
            Date: <span className=" font-light">{new Date(data.publishedAt).toDateString()}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-700 text-sm font-light w-full whitespace-nowrap overflow-hidden text-ellipsis">
            ${data.title}
          </p>
        </div>
        <div className="flex gap-4 justify-center items-center py-2">
          <TbListDetails className="text-2xl text-gray-700 hover:cursor-pointer hover:text-orange-600" />

          <MdEditNote className="text-2xl text-gray-700 hover:cursor-pointer hover:text-orange-600" />

          <MdDeleteOutline className="text-2xl text-gray-700 hover:cursor-pointer hover:text-orange-600" />
        </div>
      </div>
    </div>
  )
}
