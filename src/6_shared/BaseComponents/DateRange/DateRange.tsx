import {useEffect, useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
    onChange: (start: Date, end: Date) => void
}

export const DateRange = ({onChange}: Props) => {


    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1)
    const [startDate, setStartDate] = useState<Date>(lastMonth);
    const [endDate, setEndDate] = useState<Date>(new Date());

    useEffect(() => {
        onChange(startDate, endDate)
    }, [startDate, endDate]);

    const handleStartDateChange = (date: Date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date: Date) => {
        setEndDate(date);
    };

    return (
        <div>
            <p className={"mb-1"}>Диапазон</p>
            <div className={`w-full sm:w-4/6 flex items-center`}>
                <DatePicker
                    popperPlacement={'left-start'}
                    className={`w-20 sm:w-32 p-1 text-center rounded-[5px] border-2`}
                    selected={startDate}
                    onChange={handleStartDateChange}
                    selectsStart
                    dateFormat="dd.MM.yyyy"
                />

                <span className={`text-[16px] whitespace-nowrap ml-5 mr-5`}>{"->"}</span>

                <DatePicker
                    popperPlacement={'left-start'}
                    className={`w-20 sm:w-32 p-1 text-center rounded-[5px] border-2`}
                    selected={endDate}
                    onChange={handleEndDateChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="dd.MM.yyyy"
                />
            </div>
        </div>
    );
};
