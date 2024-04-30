import {DetailOrderModel} from "../model/types.ts";
import {DetailOrderDto} from "@/5_entities/order/api/types.ts";

export function mapDetailOrder(dto: DetailOrderDto): DetailOrderModel {
    return {
        id: dto.id,
        child_name: dto.child_name,
        child_age: dto.child_age,
        parent_name: dto.parent_name,
        full_price: dto.full_price,
        full_time: dto.full_time,
        is_paid: dto.is_paid,
        is_finished: dto.is_finished,
        entered_time: dto.entered_time,
        remain_time: dto.remain_time,
        author_name: dto.author_name,
        extra_time: dto.extra_time,
        sale: dto.sale,
        sale_with_percent: dto.sale_with_percent,
        parent_phone_number: dto.parent_phone_number
    }
}