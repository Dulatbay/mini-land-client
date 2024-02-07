import React from "react";

interface props {
    showIcon: boolean,
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const ButtonDelete = ({showIcon, clickHandler}: props) => {

    return (
        <>
            {showIcon ? (
                <div className={`flex justify-center sm:justify-end w-[50px] h-[50px]`}>
                    <button className={`py-3 px-4 border border-[#FF3333] rounded hover:bg-[#666666]`}
                            onClick={clickHandler}>
                        <svg width="24" height="24" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.74967 13.0417C1.74967 13.9125 2.46217 14.625 3.33301 14.625H9.66634C10.5372 14.625 11.2497 13.9125 11.2497 13.0417V3.54167H1.74967V13.0417ZM12.0413 1.16667H9.27051L8.47884 0.375H4.52051L3.72884 1.16667H0.958008V2.75H12.0413V1.16667Z"
                                fill="#FF3333"/>
                        </svg>
                    </button>
                </div>

            ) : (
                <button
                    onClick={clickHandler}
                    className={`py-2 px-7 lg:py-3 lg:px-10 text-[#FF3333] text-[20px] border border-[#FF3333] rounded hover:bg-[#666666]`}>Удалить</button>
            )}
        </>
    );
};