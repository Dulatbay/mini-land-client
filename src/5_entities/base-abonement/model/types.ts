export interface BaseAbonementDto {
    id: number;
    title: string;
    description: string;
    full_time: number;
    full_price: number;
    quantity: number;
}

export interface RequestCreateBaseAbonementDto {
    title: string;
    description: string;
    full_time: number;
    full_price: number;
    quantity: number;
}

export interface BaseAbonementCardModelManager {
    id: number;
    title: string;
    description: string;
    full_time: number;
    full_price: number;
}

export interface BaseAbonementCardModel {
    id: number;
    title: string;
    description: string;
    full_time: number;
    full_price: number;
    quantity: number;
}

export interface BaseAbonementFormModel {
    id: number;
    title: string;
    description: string;
    full_time: number;
    full_price: number;
}
