import {OrderCard, useAllOrdersQuery} from "@/5_entities/order";

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
export const OrderCardList = () => {
    const {data, isLoading, isError, error} = useAllOrdersQuery()

    if(isLoading){
        return "Loading"
    }

    if(isError){
        console.log(error)
        return "error, check console"
    }


    return (
        <div className={`w-full lg:w-10/12 m-auto pt-10 flex flex-wrap justify-center items-center`}>
            {
                data?.map(order =>
                    <OrderCard {...order} key={order.id}/>
                )
            }
        </div>
    );
}

