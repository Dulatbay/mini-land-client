import {useNavigate} from "react-router-dom";

export const ButtonBack = () => {
    const navigate = useNavigate()
    return (
        <div className={`w-3/12 flex justify-center items-center pt-10`}>
            <button className={`font-medium text-xl md:text-2xl`}
                    onClick={() => navigate(-1)}
            >← Back
            </button>
        </div>
    );
};
