import {MouseEvent} from "react";

interface Props {
    content: string;
    backgroundColor?: string | undefined;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}


export const Button = ({disabled, content, backgroundColor, onClick}: Props) => {
    return (
        <button
            type={"button"}
            className={`w-full text-center p-2 rounded-lg text-white disabled:opacity-60 bg-${backgroundColor}`}
            disabled={disabled}
            onClick={onClick}
        >
            {content}
        </button>
    );
};
