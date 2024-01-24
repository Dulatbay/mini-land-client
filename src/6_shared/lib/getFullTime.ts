export const getFullTime = (extraTimeHour: number, extraTimeMinute: number) => {
    return (extraTimeHour * 3600) + (extraTimeMinute * 60);
}