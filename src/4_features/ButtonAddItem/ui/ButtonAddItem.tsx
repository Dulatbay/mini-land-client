import {useNavigate} from "react-router-dom";

export const ButtonAddItem = () => {
    const navigate = useNavigate()
    return (
        <div className={`flex items-center cursor-pointer border-2 border-transparent p-2 rounded-2xl
        transition ease-in-out duration-500 hover:border-green-500 hover:bg-gray-100 hover:shadow-2xl`} onClick={()=> navigate('/create-order')}>
            <button className={`w-9 h-9 flex items-center justify-center text-white font-bold rounded-full`} style={{ backgroundColor: '#1FD680' }}>+</button>
            <p className={`pl-3`}>Создать заказ</p>
        </div>
    );
};
