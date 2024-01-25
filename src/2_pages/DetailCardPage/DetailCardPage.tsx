import {NavBar} from "@/3_widgets/NavBar";
import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {OrderDetailInfo} from "@/3_widgets/OrderDetailInfo/OrderDetailInfo.tsx";

const DetailCardPage = () => {
    return (
        <div>
            <NavBar/>
            <ButtonBack/>
            <OrderDetailInfo/>
        </div>
    );
};

export default DetailCardPage;