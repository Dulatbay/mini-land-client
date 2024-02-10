import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {OrderDetailInfo} from "@/3_widgets/OrderDetailInfo/OrderDetailInfo.tsx";
import {useNavigate} from "react-router-dom";

const DetailCardPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <ButtonBack clickHandler={()=>navigate('/')}/>
            <OrderDetailInfo/>
        </div>
    );
};

export default DetailCardPage;