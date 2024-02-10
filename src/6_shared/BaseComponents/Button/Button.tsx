import {MouseEvent} from "react";

interface Props {
    content: string;
    backgroundColor?: string | undefined;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
    isLoading?: boolean
}


export const Button = ({disabled, content, backgroundColor, onClick, isLoading}: Props) => {


    return (
        <button
            type={"button"}
            className={`w-full text-center p-2 rounded-lg text-white disabled:opacity-60 ${backgroundColor}
                transition ease-in-out duration-75 hover:brightness-110
            `}
            disabled={disabled || isLoading}
            onClick={onClick}
        >
            {content}
        </button>
    );
};
