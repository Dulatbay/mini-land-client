export const getTime = (seconds: number) => {

    let result = ""
    const h = Math.floor(seconds / 3600)
    if (h != 0) {
        result += `${h}ч.`
        seconds = Math.floor(seconds % 3600);
    }
    const m = Math.floor(seconds / 60)
    if (m != 0) {
        if (h != 0) result += " "
        result += `${m}м. `
    }
    return result.length ? result : "0";
}