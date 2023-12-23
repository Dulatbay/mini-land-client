import {Clicker} from "@/6_shared/BaseComponents/Clicker/Clicker.tsx";

export const InputOrder = () => {

    return (
        <div className={`h-full 2xl:h-32 md:flex border border-gray-500 rounded-lg p-3 mt-3`}>
            <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 text-center md:text-left text-white`}>Заказ</p>
            <div className={`w-full 2xl:w-4/6 h-full flex flex-col justify-between items-start`}>
                <select className={`w-full p-3 rounded-lg`}/>
                <div className={`h-full pt-2 flex flex-col items-start`}>
                    <Clicker time={'Часов'}/>
                    <Clicker time={'Минут'}/>
                </div>
            </div>
        </div>
    );
};
