import { configureStore } from '@reduxjs/toolkit'
import motorReducer from '../pages/Cari/CariSlice'

export default configureStore({
  reducer: {
      motor: motorReducer
  },
})