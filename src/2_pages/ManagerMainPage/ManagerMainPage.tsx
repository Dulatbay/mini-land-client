import {ButtonAll} from "@/4_features/ButtonAll/ButtonAll.tsx";
import {NavBar} from "@/3_widgets/NavBar/NavBar.tsx";
import {ButtonAddItem} from "@/4_features/ButtonAddItem/ButtonAddItem.tsx";
import {useKeycloak} from "@react-keycloak/web";
import {OrderCard, useAllOrdersQuery} from "5_entities/order";

// const exampleRecord: OrderCardModel = {
//     id: 1,
//     child_name: "Alice Doe",
//     parent_name: "John Doe",
//     entered_time: "02:50",
//     full_time: 3600,
//     full_price: 2500.0,
//     age: 5,
//     is_finished: false,
//     remain_time: -6043,
//     is_paid: false
// };


export const ManagerMainPage = () => {
    const {keycloak} = useKeycloak()
    const {data, isFetching, isError, error} = useAllOrdersQuery()
    // const isDirector = false
    const isDirector = keycloak.hasRealmRole("admin")

    if(isFetching)
        return "Loading"

    if(isError){
        console.log(error)
        return "error, check console"
    }

    return (
        <div>
            <NavBar isDirector={isDirector}/>
            <div className={`w- flex justify-between items-center md:pr-24 md:pl-24 pt-7`}>
                <ButtonAll/>
                <ButtonAddItem/>
            </div>

            <div className={`w-full lg:w-10/12 m-auto pt-10 flex flex-wrap justify-center items-center`}>
                {
                    data?.map(order=>
                        <OrderCard {...order} key={order.id}/>
                    )
                }
            </div>
        </div>
    );
};