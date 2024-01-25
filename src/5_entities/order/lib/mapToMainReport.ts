import {ResponseDirectorMainReportDto} from "@/5_entities/order/api/types.ts";
import {DirectorMainReportModel} from "@/5_entities/order/model/types.ts";

export function mapToMainReport(dto: ResponseDirectorMainReportDto): DirectorMainReportModel {
    return {
        orders_count: dto.orders_count,
        employee: dto.employee
    }
}