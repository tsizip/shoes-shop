import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer/likeReducer'

export const store = configureStore({
     reducer: {
          // noi khai bao cac reducers
          like: likeReducer
     },
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch