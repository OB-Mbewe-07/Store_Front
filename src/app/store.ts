
import { configureStore } from "@reduxjs/toolkit";
import cartReducer  from "../feature/cart/cartSlice";
import { apiProductsSlices } from "../API/data";

export const store = configureStore({
    reducer:{
       cart: cartReducer,
       [apiProductsSlices.reducerPath] : apiProductsSlices.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(apiProductsSlices.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>