import {ChangeEventHandler} from "react";

interface Props {
    placeholder: string,
    type?: "number" | "text",
    className?: string,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    min?: number,
    disabled?: boolean,
    value?: string
}

export const CommonInput = ({placeholder, type, className, onChange, min, disabled, value}: Props) => {
    const style = `w-full 2xl:m-0 p-3 rounded-lg border-2 focus:outline-gray-300 ${className}`
    return <input
        className={style}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        min={min}
        disabled={disabled}
        value={value}
    />
}