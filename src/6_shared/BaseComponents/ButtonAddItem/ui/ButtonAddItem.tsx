import React from "react";

interface props{
    text: string,
    clickHandler: (event: React.MouseEvent<HTMLElement>) => void
}


export const ButtonAddItem = ({text, clickHandler}:props) => {
    return (
        <div className={`flex items-center cursor-pointer border-2 border-transparent p-2 rounded-2xl
        transition ease-in-out duration-500 hover:border-green-500 hover:bg-gray-100 hover:shadow-2xl`} onClick={clickHandler}>
            <button className={`min-w-9 min-h-9 flex items-center justify-center text-white font-bold rounded-full bg-green-600 leading-none pb-0.5`}>{"+"}</button>
            <p className={`pl-3`}>{text}</p>
        </div>
    );
};
