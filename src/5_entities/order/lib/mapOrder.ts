import {type OrderCardDto} from "../api/types.ts";
import {type OrderCardModel} from "../model/types.ts";

export function mapOrder(dto: OrderCardDto): OrderCardModel {
    return {
        id: dto.id,
        child_name: dto.child_name,
        age: dto.age,
        parent_name: dto.parent_name,
        full_price: dto.full_price,
        full_time: dto.full_time,
        is_paid: dto.is_paid,
        is_finished: dto.is_finished,
        entered_time: dto.entered_time,
        remain_time: dto.remain_time
    }
}