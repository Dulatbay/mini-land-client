import {greenBg, redBg, yellowBg} from "@/6_shared/lib/colors.ts";

export const getBackgroundColorByOrderInfo = (isFinished: boolean, remainTime: number) => {
    if (isFinished)
        return greenBg
    else if (remainTime >= 0)
        return yellowBg
    else if (remainTime < 0)
        return redBg
}