import {createSlice} from "@reduxjs/toolkit";
import {PriceModel} from "@/5_entities/price";
import {priceApi} from "@/5_entities/price/api/priceApi.ts";
import {RootState} from "@/1_app/appStore.ts";

interface InitialStateType {items: PriceModel[]}

const initialState: InitialStateType = {
    items: []
}
export const priceSlice = createSlice({
    name: 'price',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(
            priceApi.endpoints.allPrices.matchFulfilled,
            (state: InitialStateType, {payload}) => {
                state.items = payload
            }
        )
    }
})

export const    selectAllPrices = (state: RootState) => state.price?.items