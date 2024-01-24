interface Props {
    content: string;
    backgroundColor: string;
    disabled?: boolean;
}


export const Button = ({ disabled, content, backgroundColor }: Props) => {
    return (
        <button
            className={`w-full text-center p-2 rounded-lg text-white disabled:opacity-60`}
            style={{ backgroundColor: backgroundColor }}
            disabled={disabled}
        >
            {content}
        </button>
    );
};
