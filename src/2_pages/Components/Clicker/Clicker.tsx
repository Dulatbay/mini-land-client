import React, { useState } from 'react';

interface props {
    time: string
}
export const Clicker = ({time} : props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if(count != 0){
            setCount(count - 1);
        }
    };

    return (
        <div className={`w-full flex justify-between items-center`}>
            <p className={`text-white mr-3`}>{time}:</p>

            <div className={`flex items-center justify-center`}>
                <button
                    onClick={decrement}
                    className={`w-2 h-2 flex justify-center items-center border p-2 rounded-full mr-3`}
                    style={{border: "1px solid #FF3333", color: "#FF3333"}}
                >
                    -
                </button>

                <span className={`text-xs text-white`}>{count}</span>

                <button
                    onClick={increment}
                    className={`w-2 h-2 flex justify-center items-center p-2 rounded-full ml-3`}
                    style={{border: "1px solid #1FD680", color: "#1FD680"}}
                >
                    +
                </button>
            </div>
        </div>
    );
};
