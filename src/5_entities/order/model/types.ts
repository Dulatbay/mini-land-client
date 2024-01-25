export interface OrderCardModel {
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
}

export interface DetailOrderModel {
    id: number;
    parent_name: string;
    parent_phone_number: string;
    child_name: string;
    child_age: number;
    sale: ResponseSaleModel;
    extra_time: number;
    entered_time: string;
    remain_time: number;
    full_price: number;
    full_time: number;
    is_paid: boolean;
    is_finished: boolean;
    author_name: string;
}

interface ResponseSaleModel {
    id: number;
    title: string;
    full_time: number;
    full_price: number;
    enabled: boolean;
}

export interface EmployeeRow {
    username: string;
    orders_count: number;
    profit: number;
    serve_time: number;
}

export interface DirectorMainReportModel {
    orders_count: number;
    employee: EmployeeRow[];
}

