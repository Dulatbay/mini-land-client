export interface ResponseSaleWithPercentDto {
    id: number;
    title: string;
    enabled: boolean;
    percent: number;
}

export interface RequestCreateSaleWithPercentDto {
    title: string;
    percent: number;
}