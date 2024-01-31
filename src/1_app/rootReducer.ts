import { combineReducers } from '@reduxjs/toolkit'
import {baseApi} from "@/6_shared/api/baseApi.ts";
import {orderFormSlice} from "@/5_entities/orderForm";
import {priceSlice} from "@/5_entities/price";
import {reportSlice} from "@/5_entities/report/model/slice.ts";

export const rootReducer = combineReducers({
  [orderFormSlice.name]: orderFormSlice.reducer,
  [priceSlice.name]: priceSlice.reducer,
  [reportSlice.name]: reportSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
