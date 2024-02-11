interface AppErrorData {
    error: string,
    message: string,
    stackTrace: string,
    timeStamp: number,
    requestId: number
}

interface CommonErrorData {
    error: string,
    path: string,
    status: number,
    timeStamp: number,
}

export interface AppErrorType<T> {
    status: number,
    data: T
}

export class ApiAppError extends Error {
    title: string
    message: string
    statusCode: number

    constructor(error: unknown) {
        super();
        this.name = "Api Error"

        if (isCommonErrorData(error)) {
            this.title = error.data.error
            this.message = error.data.path
            this.statusCode = error.status
        } else if (isAppErrorData(error)) {
            this.title = error.data.error
            this.message = error.data.message
            this.statusCode = error.status
        } else {
            this.title = "Ошибка..."
            this.message = 'Что-то пошло не так...'
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            this.statusCode = error.status
        }

    }


}

function basicError(error: unknown) {
    return typeof error === 'object' && error != null && 'data' in error && error['data'] != null && "status" in error && error["status"] != 401
}

export function isCommonErrorData(
    error: unknown
): error is AppErrorType<CommonErrorData> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (basicError(error) && error.data.status == 401) return false;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return basicError(error) && error["data"]!.path != undefined
}

export function isAppErrorData(
    error: unknown
): error is AppErrorType<AppErrorData> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    if (basicError(error) && error.status == 401) return false;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return basicError(error) && error["data"]!.message != undefined
}



