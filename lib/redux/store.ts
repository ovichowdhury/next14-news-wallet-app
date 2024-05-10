import { combineReducers, configureStore } from '@reduxjs/toolkit'
import globalReducer from '@/lib/redux/features/global/global.slice'

const rootReducer = combineReducers({
  global: globalReducer,
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
