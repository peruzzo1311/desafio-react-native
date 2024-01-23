import { Client } from '@/types'
import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit'
import { RootState } from '..'

const ClientsInitialState = [] as Client[]

export const clientsSlice = createSlice({
  name: 'clients',
  initialState: ClientsInitialState,
  reducers: {
    SET_CLIENTS: (
      state,
      action: PayloadAction<Client[]>
    ) => {
      return action.payload
    },
    ADD_CLIENT: (state, action: PayloadAction<Client>) => {
      return [...state, action.payload]
    },
  },
})

export const { SET_CLIENTS, ADD_CLIENT } =
  clientsSlice.actions

export const selectUser = (state: RootState) => state.client

export default clientsSlice.reducer
