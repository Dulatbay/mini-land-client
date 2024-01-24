export const getOrderRemainTime = (remainTime: number) => {
    if (remainTime < 0) remainTime *= -1;
    const min = Math.round(remainTime / 60)
    if (min < 0) return Math.round(remainTime) + "c."
    return min + "m."
}
