export const getOrderColor = (isFinished: boolean, remainTime: number) => {
    if (isFinished)
        return "green-500"
    else if (remainTime >= 0)
        return "yellow-500"
    else if (remainTime < 0)
        return "red-500"
}