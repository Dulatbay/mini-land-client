import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {reportApi} from "@/5_entities/report";

interface InitialStateType {
    request?: {
        username?: string,
        start_date: string,
        end_date: string
    }
    response: {
        ordersCount: number,
        totalTime: number,
        profit: number,
    }
}

const initialState: InitialStateType = {
    response: {
        ordersCount: 0,
        totalTime: 0,
        profit: 0,
    }
}

export const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        setReportRequest: (state, action: PayloadAction<typeof initialState.request>) => {
            state.request = action.payload
        },

    },
    extraReducers: builder => {
        builder.addMatcher(reportApi.endpoints.reportByParam.matchFulfilled,
            (state: InitialStateType, {payload}) => {
                state.response.profit = payload.profit
                state.response.totalTime = payload.total_time
                state.response.ordersCount = payload.orders_count
            }
        )
    }
})

export const selectReportByParams = (state: RootState) => state.report
export const {setReportRequest} = reportSlice.actions