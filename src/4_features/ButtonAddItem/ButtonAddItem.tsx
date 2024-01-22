import {useNavigate} from "react-router-dom";

interface props{
    type: string
}


export const ButtonAddItem = ({type}:props) => {
    const navigate = useNavigate()
    return (
        <div className={`flex items-center cursor-pointer`} onClick={()=> navigate('/create-order')}>
            <button className={`w-9 h-9 flex items-center justify-center text-white font-bold rounded-full`} style={{ backgroundColor: '#1FD680' }}>+</button>
            <p className={`pl-3`}>Создать {type}</p>
        </div>
    );
};
