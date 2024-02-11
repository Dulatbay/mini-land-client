export interface CardRoomTariffDto {
    id: number;
    started_time: string;
    ended_time: string;
    first_price: number;
    max_child: number;
    week_days: number[];
}

export interface RequestCreateTariffDto {
    started_at: string;
    finished_at: string;
    days: number[];
    first_price: number;
    penalty_per_hour: number;
    penalty_per_half_hour: number;
    max_child: number;
    child_price: number;
}
