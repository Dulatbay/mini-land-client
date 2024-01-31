
interface ResponseEmployeeDto {
    username: string;
    orders_count: number;
    profit: number;
    serve_time: number;
}

export interface ResponseDirectorMainReportDto {
    orders_count: number;
    employee: ResponseEmployeeDto[];
}

export interface RequestReportByParamsDto {
    start_date: string;
    end_date: string;
    username?: string;
}

export interface ResponseReportByParamsDto {
    orders_count: number;
    total_time: number;
    profit: number;
}

export interface ResponseProfitsReportDto{
    income: number;
    expense: number
}

export interface RequestProfitsReportParams{
    start_date: string,
    end_date: string
}
export interface RequestCreateProfitDto{
    reason: string,
    profit: number,
    is_expense: boolean
}