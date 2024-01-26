export interface ResponseSaleDto {
    id: number;
    title: string;
    full_time: number;
    full_price: number;
    enabled: boolean;
}


export interface RequestCreateSaleDto{
    title: string,
    full_time: number,
    full_price: number
}