import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {OrderFormSliceState, RequestOrder} from "@/5_entities/orderForm/model/types.ts";



const initialState: OrderFormSliceState = {
    requestOrder: undefined
}


export const orderFormSlice = createSlice({
    name: 'orderForm',
    initialState,
    reducers: {
        setRequestOrder: (state, action: PayloadAction<RequestOrder>) => {
            state.requestOrder = action.payload
        },
        clearAll: (state) => {
            state.requestOrder = undefined
        }
    }
})

export const selectRequestOrder = (state: RootState) => state.orderForm?.requestOrder

export const {setRequestOrder, clearAll} = orderFormSlice.actions