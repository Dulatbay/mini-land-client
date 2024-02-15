export interface SaleOrder {
    id: number,
    full_time: number,
    full_price: number
}

export interface RequestOrder {
    child_name: string | undefined,
    child_age: number | undefined,
    parent_name: string | undefined,
    parent_phone_number: string | undefined,
    sale: SaleOrder | undefined,
    extra_time_hour: number | undefined,
    extra_time_minute: number | undefined,
    is_paid: boolean | undefined
}

export interface OrderFormSliceState {
    requestOrder: RequestOrder | undefined
}