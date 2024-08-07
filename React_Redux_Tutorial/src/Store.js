import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './Slices/Counter/counterSlice'

export const store = configureStore({
    reducer:{
        counter:counterReducer,
    },
})