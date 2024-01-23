import { configureStore } from '@reduxjs/toolkit'
import { clientsSlice } from './clients/slice'

export const store = configureStore({
  reducer: {
    client: clientsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
