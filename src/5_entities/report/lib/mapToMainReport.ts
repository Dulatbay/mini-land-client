import {ResponseDirectorMainReportDto} from "@/5_entities/report/api/types.ts";
import {TableReportModel} from "@/5_entities/report/model/types.ts";

export function mapToMainReport(dto: ResponseDirectorMainReportDto): TableReportModel {
    return {
        orders_count: dto.orders_count,
        employee: dto.employee
    }
}