export interface AbonementDto {
    id: number;
    client_name: string;
    phone_number: string;
    child_name: string;
    child_age: number;
    base_abonement_id: number;
}

export interface RequestCreateAbonementDto {
    client_name: string;
    phone_number: string;
    child_name: string;
    child_age: number;
    base_abonement_id: number;
}

export interface ResponseAbonementCardModel {
    id: number;
    client_name: string;
    base_abonemnt_id?: number;
    quantity?: number;
    base_abonement_id?: number;
    base_abonement_name?: string;
    base_abonement_description?: string;
    base_abonement_price?: number;
    base_abonement_time?: number;
}

export interface AbonementCardModel {
    client_name: string;
    phone_number: string;
    abonement_type: string;
    abonement_price: number;
}
