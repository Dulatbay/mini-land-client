import {ChangeEventHandler} from "react";

interface Props {
    placeholder: string,
    type?: "number" | "text",
    className?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    min?: number
}

export const CommonInput = ({placeholder, type, className, onChange, min}: Props) => {
    return <input
        className={`w-full 2xl:m-0 p-3 rounded-lg border-2 focus:outline-gray-300 ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        min={min}
    />
}