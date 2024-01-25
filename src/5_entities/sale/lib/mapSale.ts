import {ResponseSaleDto} from "@/5_entities/sale/api/types.ts";
import {SaleModel} from "@/5_entities/sale/model/types.ts";

export const mapSale = (dto: ResponseSaleDto): SaleModel => {
    return {
        id: dto.id,
        enabled: dto.enabled,
        full_price: dto.full_price,
        full_time: dto.full_time,
        title: dto.title
    }
}