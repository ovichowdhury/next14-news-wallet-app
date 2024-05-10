import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface GlobalState {
  lang: string
}

const initState: GlobalState = {
  lang: 'en',
}

export const globalSlice = createSlice({
  name: 'global',
  initialState: initState,
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload
    },
  },
})

export const { changeLang } = globalSlice.actions

export default globalSlice.reducer
