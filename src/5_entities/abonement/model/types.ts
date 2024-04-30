export interface AbonementDto {
    id: number;
    client_name: string;
    phone_number: string;
    abonement_type: string;
    abonement_price: number;
}

export interface ResponseAbonementCardModel {
    id: number;
    client_name: string;
    base_abonemnt_id?: number;
    quantity?: number;
    // base_abonemnt_name?: number;
    // base_abonemnt_descriptrion?: number;
}

export interface AbonementCardModel {
    client_name: string;
    phone_number: string;
    abonement_type: string;
    abonement_price: number;
}
