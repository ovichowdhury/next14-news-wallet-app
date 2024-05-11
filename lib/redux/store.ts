import { combineReducers, configureStore } from '@reduxjs/toolkit'
import globalReducer from '@/lib/redux/features/global/global.slice'
import newsReducer from '@/lib/redux/features/news/news.slice'

const rootReducer = combineReducers({
  global: globalReducer,
  news: newsReducer,
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
