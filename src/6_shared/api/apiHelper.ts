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

    constructor(error : any) {
        super();
        this.name = "Api Error"

        if(isCommonErrorData(error)){
            this.title = error.data.error
            this.message = error.data.path
            this.statusCode = error.status
        }
        else if(isAppErrorData(error)){
            this.title = error.data.error
            this.message = error.data.message
            this.statusCode = error.status
        }else{
            this.title = "Ошибка..."
            this.message = 'Что-то пошло не так...'
            this.statusCode = error.status
        }

    }


}

export function isCommonErrorData(
    error: any
): error is AppErrorType<CommonErrorData> {
    return typeof error === 'object' && error != null && 'data' in error && error["data"]!.path != undefined
}

export function isAppErrorData(
    error: any
): error is AppErrorType<AppErrorData> {
    return typeof error === 'object' && error != null && 'data' in error && error["data"]!.message != undefined
}

