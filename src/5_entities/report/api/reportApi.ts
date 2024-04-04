import {baseApi} from "@/6_shared/api/baseApi.ts";
import {mapToMainReport} from "@/5_entities/report/lib/mapToMainReport.ts";
import {ReportByParamsModel, TableReportModel} from "@/5_entities/report/model/types.ts";
import {
    RequestCreateProfitDto,
    RequestProfitsReportParams,
    RequestReportByParamsDto,
    ResponseDirectorMainReportDto, ResponseProfitsDetailReportDto,
    ResponseProfitsReportDto,
    ResponseReportByParamsDto
} from "@/5_entities/report/api/types.ts";
import {mapToReportByParams} from "@/5_entities/report/lib/mapToReportByParams.ts";

export const reportApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        reportTable: build.query<TableReportModel, void>({
            query: () => ({
                url: '/reports/table-report'
            }),
            transformResponse: (response: ResponseDirectorMainReportDto) => mapToMainReport(response)
        }),
        reportByParam: build.query<ReportByParamsModel, RequestReportByParamsDto>({
            query: (request) => ({
                url: '/reports/report',
                params: {
                    "start_date": request.start_date,
                    "end_date": request.end_date,
                    "username": request.username
                }
            }),
            transformResponse: (response: ResponseReportByParamsDto) => mapToReportByParams(response)
        }),
        reportUsernames: build.query<string[], void>({
            query: () => ({
                url: '/reports/usernames'
            })
        }),
        createProfit: build.mutation<void, RequestCreateProfitDto>({
            query: (requestBody) => ({
                url: '/reports/profits',
                method: "POST",
                body: requestBody
            })
        }),
        reportProfitsByParams: build.query<ResponseProfitsReportDto, RequestProfitsReportParams>({
            query: (request) => ({
                url: '/reports/profits',
                params: {
                    "start_date": request.start_date,
                    "end_date": request.end_date
                }
            })
        }),
        reportProfitsDetailByParams: build.query<ResponseProfitsDetailReportDto, RequestProfitsReportParams>({
            query: (request) => ({
                url: '/reports/profits/details',
                params: {
                    "start_date": request.start_date,
                    "end_date": request.end_date
                }
            })
        })
    })
})


export const {
    useLazyReportByParamQuery,
    useReportTableQuery,
    useReportUsernamesQuery,
    useLazyReportProfitsByParamsQuery,
    useCreateProfitMutation,
    useLazyReportProfitsDetailByParamsQuery
} = reportApi