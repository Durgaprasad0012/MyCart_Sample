import { configureStore } from "@reduxjs/toolkit";

// import reducer into cart
import CartReducer from './Cart'

export const store = configureStore({
    reducer:{
        cart : CartReducer,
    }
})