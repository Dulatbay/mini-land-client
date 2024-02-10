import {daysOfWeek} from "@/6_shared/lib/daysOfWeek.ts";
import React from "react";

const styleIfNonSelected = "bg-gray-50  border-gray-200"
// hover:bg-green-600 hover:text-white
const styleIfSelected = "bg-green-700 text-white"

interface Props {
    setSelectedDays?: React.Dispatch<React.SetStateAction<boolean[]>>,
    selectedDays: boolean[],
}

export const DaysOfWeek = ({setSelectedDays, selectedDays}: Props) => {

    const daysOfWeekSelectHandler = (index: number) => {
        if (!setSelectedDays) return
        const copyOfArr = selectedDays.slice(0)
        copyOfArr[index] = !selectedDays[index]
        setSelectedDays!(copyOfArr)
    }
    return <div className={'flex flex-wrap gap-1'}>
        {
            daysOfWeek.map((i, j) => <div
                key={j}
                onClick={() => daysOfWeekSelectHandler(j)}
                className={`w-[35px] h-[35px] 
                                                    flex items-center justify-center  
                                                    text-center font-medium 
                                                    border rounded ${setSelectedDays ? "cursor-pointer" : ""}
                                                    transition-all duration-500  
                                                    ${selectedDays[j] ? styleIfSelected : styleIfNonSelected}`}>
                {i}
            </div>)
        }
    </div>
}