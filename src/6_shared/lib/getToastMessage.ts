import {isAppErrorData, isCommonErrorData} from "@/6_shared/api/apiHelper.ts";
import {toast} from "react-toastify";

export const getToastMessage = (error: unknown) => {
    if (isAppErrorData(error)) {
        toast.error(error.data.message)
    } else if (isCommonErrorData(error)) {
        toast.error(error.data.error)
    } else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if ("status" in error && error.status == 401)
            toast.error(`Ошибка авторизации`)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        else { // @ts-expect-error
            if ("status" in error)
                toast.error(`Ошибка ${error.status!}`)
            else
                toast.error(`Ошибка...`)
        }
    }
}