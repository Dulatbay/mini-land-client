export interface ResponsePriceDto {
    id: number;
    full_time: number;
    full_price: number;
    days: number[];
    enabled: boolean;
}

export interface RequestCreatePriceDto {
    full_time: number;
    full_price: number;
    days: number[]
}
