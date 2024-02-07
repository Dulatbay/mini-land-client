import {PriceModel} from "../model/types.ts";
import {ResponsePriceDto} from "../api/types.ts";

export const mapPrice = (dto: ResponsePriceDto): PriceModel => {
    return {
        id: dto.id,
        enabled: dto.enabled,
        full_price: dto.full_price,
        full_time: dto.full_time,
        days: dto.days
    }
}