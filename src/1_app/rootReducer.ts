import { combineReducers } from '@reduxjs/toolkit'
import {baseApi} from "@/6_shared/api/baseApi.ts";

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
})
