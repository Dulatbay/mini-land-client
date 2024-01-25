import { combineReducers } from '@reduxjs/toolkit'
import {baseApi} from "@/6_shared/api/baseApi.ts";
import {orderFormSlice} from "@/5_entities/orderForm";
import {priceSlice} from "@/5_entities/price";

export const rootReducer = combineReducers({
  [orderFormSlice.name]: orderFormSlice.reducer,
  [priceSlice.name]: priceSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
