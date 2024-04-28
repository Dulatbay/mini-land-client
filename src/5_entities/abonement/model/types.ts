import { BaseAbonementCardModel } from '@/5_entities/base-abonement/model/types';

export interface AbonementDto {
    id: number;
    client_name: string;
    phone_number: string;
    abonement_type: string;
    abonement_price: number;
}

export interface RequestAbonementCardModel {
    id: number;
    client_name: string;
    base_abonemnt?: BaseAbonementCardModel;
}

export interface AbonementCardModel {
    client_name: string;
    phone_number: string;
    abonement_type: string;
    abonement_price: number;
}
