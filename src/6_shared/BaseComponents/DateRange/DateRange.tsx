import React, {useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DateRange = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    return (
        <div className={`w-full sm:w-4/6 flex items-center  pt-2`}>
            <DatePicker
                className={`w-20 sm:w-32 p-1 text-center rounded-[5px] bg-[#737373]`}
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="dd.MM.yyyy"
            />

            <span className={`text-[16px] sm:text-[30px] pr-1 pl-1 sm:pr-10 sm:pl-10`}>⟶</span>

            <DatePicker
                className={`w-20 sm:w-32 p-1 text-center rounded-[5px] bg-[#737373]`}
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="dd.MM.yyyy"
            />
        </div>
    );
};
