import {hoverBorderGreen, hoverBorderRed, hoverBorderYellow} from "@/6_shared/lib/colors.ts";

export const getBorderBackgroundWithHover = (isFinished: boolean, remainTime: number) => {
    if (isFinished)
        return hoverBorderGreen
    else if (remainTime >= 0)
        return hoverBorderYellow
    else if (remainTime < 0)
        return hoverBorderRed
}