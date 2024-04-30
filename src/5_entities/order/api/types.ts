export interface OrderCardDto {
    id: number;
    child_name: string;
    parent_name: string;
    entered_time: string;
    full_time: number;
    full_price: number;
    age: number;
    is_finished: boolean;
    remain_time: number;
    is_paid: boolean;
    author_name: string;
}

export interface DetailOrderDto {
    id: number;
    parent_name: string;
    parent_phone_number: string;
    child_name: string;
    child_age: number;
    sale: ResponseSaleDto;
    extra_time: number;
    entered_time: string;
    remain_time: number;
    full_price: number;
    full_time: number;
    is_paid: boolean;
    is_finished: boolean;
    author_name: string;
    sale_with_percent: ResponseSaleWithPercentDto;
}

interface ResponseSaleDto {
    id: number;
    title: string;
    full_time: number;
    full_price: number;
    enabled: boolean;
}

interface ResponseSaleWithPercentDto {
    id: number;
    title: string;
    enabled: boolean;
    percent: number;
}

export interface RequestCreateOrderDto {
    parent_name: string;
    parent_phone_number: string;
    child_name: string;
    child_age: number;
    sale_id?: number;
    sale_with_percent_id?: number;
    extra_time?: number;
    is_paid?: boolean;
}
