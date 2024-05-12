'use client'

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { addArticle } from '@/lib/redux/features/news/news.slice'
import { useAppDispatch } from '@/lib/redux/hooks'
import { getRandomIntInclusive } from '@/lib/utils/news.utils'
import React, { useState } from 'react'

const initState = {
  sourceName: '',
  author: '',
  title: '',
  description: '',
  url: '',
  urlToImage: '',
  content: '',
}

export default function NewsAdd() {
  const dispatch = useAppDispatch()
  const [formState, setFormState] = useState({ ...initState })

  const onFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }
  const onSubmitClick = () => {
    dispatch(
      addArticle({
        source: {
          id: getRandomIntInclusive(1, 1000),
          name: formState.sourceName,
        },
        author: formState.author,
        title: formState.title,
        description: formState.description,
        url: formState.url,
        urlToImage: formState.urlToImage,
        content: formState.content,
        publishedAt: new Date().toISOString(),
      }),
    )
    setFormState({ ...initState })
  }

  return (
    <div className="flex flex-col w-2/3 sm:w-1/3 justify-center items-center gap-2">
      <Input
        type="text"
        placeholder="Source Name"
        name="sourceName"
        onChange={onFormInputChange}
        value={formState['sourceName']}
      />
      <Input type="text" placeholder="Author" name="author" onChange={onFormInputChange} value={formState['author']} />
      <Input type="text" placeholder="Title" name="title" onChange={onFormInputChange} value={formState['title']} />
      <Input
        type="text"
        placeholder="Description"
        name="description"
        onChange={onFormInputChange}
        value={formState['description']}
      />
      <Input type="text" placeholder="URL" name="url" onChange={onFormInputChange} value={formState['url']} />
      <Input
        type="text"
        placeholder="Image URL"
        name="urlToImage"
        onChange={onFormInputChange}
        value={formState['urlToImage']}
      />
      <Textarea placeholder="Content" name="content" onChange={onFormInputChange} value={formState['content']} />
      <button className="btn btn-meta flex justify-center items-center gap-2" onClick={onSubmitClick}>
        Submit
      </button>
    </div>
  )
}
