import { INews } from '@/types/interfaces/news.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NewsState {
  totalResults: number
  articles: INews[]
}

const initState: NewsState = {
  totalResults: 0,
  articles: [],
}

export const newsSlice = createSlice({
  name: 'news',
  initialState: initState,
  reducers: {
    setTotalResults: (state, action: PayloadAction<number>) => {
      state.totalResults = action.payload
    },
    setArticles: (state, action: PayloadAction<INews[]>) => {
      state.articles = action.payload
    },
  },
})

export const { setTotalResults, setArticles } = newsSlice.actions

export default newsSlice.reducer
