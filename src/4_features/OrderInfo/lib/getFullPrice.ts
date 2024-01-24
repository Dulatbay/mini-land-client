import {PriceModel} from "@/5_entities/price";

export const getFullPrice = (extra_time_seconds: number, prices: PriceModel[]) => {
    if (extra_time_seconds < 60) return 0
    if(!prices?.length) return 0

    let resultFullPrice = 0
    prices?.map(price => {
        while (price.full_time <= extra_time_seconds) {
            extra_time_seconds -= price.full_time
            resultFullPrice += price.full_price
        }
    })

    while(extra_time_seconds > 0){
        extra_time_seconds -= prices[prices?.length - 1].full_time
        resultFullPrice += prices[prices?.length - 1].full_price
    }
    return resultFullPrice
}