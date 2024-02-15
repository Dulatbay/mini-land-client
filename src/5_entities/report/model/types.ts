export interface EmployeeRow {
    username: string;
    orders_count: number;
    profit: number;
    serve_time: number;
}

export interface TableReportModel {
    orders_count: number;
    employee: EmployeeRow[];
}

export interface ReportByParamsModel {
    orders_count: number;
    total_time: number;
    profit: number;
}
