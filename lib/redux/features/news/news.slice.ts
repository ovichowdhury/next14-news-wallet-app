import { INews } from '@/types/interfaces/news.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NewsState {
  currentPage: number
  totalResults: number
  articles: INews[]
}

const initState: NewsState = {
  currentPage: 1,
  totalResults: 1,
  articles: [],
}

export const newsSlice = createSlice({
  name: 'news',
  initialState: initState,
  reducers: {
    setTotalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setArticles: (state, action: PayloadAction<INews[]>) => {
      state.articles = action.payload
    },
    addArticle: (state, action: PayloadAction<INews>) => {
      state.articles = [action.payload, ...state.articles]
    },
    deleteArticle: (state, action: PayloadAction<string>) => {
      const index = state.articles.findIndex((a) => a.title === action.payload)
      state.articles.splice(index, 1)
    },
  },
})

export const { setTotalResults, setArticles, setPage, addArticle, deleteArticle } = newsSlice.actions

export default newsSlice.reducer
