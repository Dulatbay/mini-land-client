
export interface BookedDayDto {
    date: string;
    started_time: string;
    ended_time: string;
}

export interface RequestCreateRoomOrderDto {
    tariff_id: number;
    client_name: string;
    client_phone_number: string;
    selected_booked_day: string;
    extra_time?: number;
    child_count: number;
    paid: boolean;
}

export interface ResponseCardRoomOrderDto {
    id: number;
    ended_time: string;
    booked_day: string;
    day_of_booking: string;
    client_name: string;
    child_quantity: number;
    full_price: number;
    full_time: number;
    author_name: string;
    client_phone_number: string;
    extra_time: number;
    finished: boolean;
    paid: boolean;
    started: boolean;
    is_finished: boolean;
    room_tariff: DetailRoomTariffDto;
}


export interface DetailRoomTariffDto {
    id: number;
    started_time: string;
    ended_time: string;
    first_price: number;
    max_child: number;
    week_days: number[];
    child_price: number;
    penalty_per_hour: number;
    penalty_per_half_hour: number;
}

