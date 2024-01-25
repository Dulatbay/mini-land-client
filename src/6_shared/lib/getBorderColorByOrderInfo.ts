import {borderGreen, borderRed, borderYellow} from "@/6_shared/lib/colors.ts";

export const getBorderColorByOrderInfo = (isFinished: boolean, remainTime: number) => {
    if (isFinished)
        return borderGreen
    else if (remainTime >= 0)
        return borderYellow
    else if (remainTime < 0)
        return borderRed
}