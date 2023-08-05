import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './slice/categorySlice'
import productsReducer from './slice/productsSlice'
import basketReducer from './slice/basketSlice'

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        basket: basketReducer
    }
})