export const getOrderColor = (isFinished: boolean, remainTime: number) => {
    if (isFinished)
        return "#1FD680"
    else if (remainTime >= 0)
        return "#FFA733"
    else if (remainTime < 0)
        return "#FF3333"
}