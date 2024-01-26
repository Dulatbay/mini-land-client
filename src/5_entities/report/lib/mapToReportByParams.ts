import {ResponseReportByParamsDto} from "@/5_entities/report/api/types.ts";
import {ReportByParamsModel} from "@/5_entities/report/model/types.ts";

export function mapToReportByParams(dto: ResponseReportByParamsDto): ReportByParamsModel {
    return {
        orders_count: dto.orders_count,
        total_time: dto.total_time,
        profit: dto.profit
    }
}