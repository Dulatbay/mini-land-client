import React from "react";

interface Props {
    clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const ButtonBack = ({clickHandler}: Props) => {
    return (
        <div className={`w-3/12 flex justify-center items-center pt-10`}>
            <button className={`font-medium text-xl md:text-2xl`}
                    onClick={clickHandler}
            >← Back
            </button>
        </div>
    );
};
