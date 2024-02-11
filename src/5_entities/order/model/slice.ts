import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface RequestParams {
    myOrders: boolean,
    finished: boolean,
    inProcess: boolean,
    overdue: boolean,
    paid: boolean
}

const initialState = {
    requestParams: {
        myOrders: false,
        finished: false,
        inProcess: false,
        overdue: false,
        paid: false
    } as RequestParams
}

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setRequestParams: (state, {payload}: PayloadAction<{id: string, checked: boolean}>) => {
            const {id, checked} = payload
            switch (id) {
                case "myOrders": state.requestParams.myOrders = checked; break;
                case "finished": state.requestParams.finished = checked; break;
                case "inProcess": state.requestParams.inProcess = checked; break;
                case "overdue": state.requestParams.overdue = checked; break;
                case "paid": state.requestParams.paid = checked; break;
            }
        }
    }
})

export const selectRequestParams = (state: RootState) => state.order.requestParams

export const {setRequestParams} = orderSlice.actions