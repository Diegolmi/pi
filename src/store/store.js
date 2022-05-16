import { configureStore } from '@reduxjs/toolkit'
import { starWarsSlice } from './slices/starwars'

export const store = configureStore({
  reducer: {
      personajes: starWarsSlice.reducer,
    },
})