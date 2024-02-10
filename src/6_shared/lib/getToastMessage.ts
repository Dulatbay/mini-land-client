import {isAppErrorData, isCommonErrorData} from "@/6_shared/api/apiHelper.ts";
import {toast} from "react-toastify";

export const getToastMessage = (error : unknown) => {
    if(isAppErrorData(error)){
        toast.error(error.data.message)
    }
    else if(isCommonErrorData(error)){
        toast.error(error.data.error)
    }
    else {
        toast.error("Произошла неизвестная ошибка")
    }
}