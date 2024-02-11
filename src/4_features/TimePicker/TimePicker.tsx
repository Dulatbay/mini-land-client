import React, {useEffect, useState} from "react";

const availableHours = [
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
]

interface Props {
    onChange: React.Dispatch<React.SetStateAction<string | undefined>>,
}

export const TimePicker = ({onChange}: Props) => {
    const [hour, setHour] = useState(12)
    const [minute, setMinute] = useState(0)


    useEffect(() => {
        const formatNumber = (num : number) => {
            return num < 10 ? `0${num}` : num;
        };

        const formattedTime = `${formatNumber(hour)}:${formatNumber(minute)}`;

        onChange(formattedTime);
    }, [hour, minute, onChange]);

    return (
        <div className="inline-flex text-lg border rounded-md p-1">
            <select className="px-1 outline-none appearance-none bg-transparent"
                    defaultValue={`${hour}`}
                    onChange={(e) => setHour(+e.target.value)}
            >
                {
                    availableHours.map((i,) => <option value={`${i}`} defaultChecked={i == hour} key={i}>{i}</option>)
                }
            </select>
            <span className="px-2">:</span>
            <select className="px-1 outline-none appearance-none bg-transparent"
                    defaultValue={`${minute}`}
                    onChange={(e) => setMinute(+e.target.value)}>
                <option value="30">30</option>
                <option value="0">00</option>
            </select>
        </div>
    )
}