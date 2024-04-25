import { useNavigate } from 'react-router-dom';
import { BaseAbonementCardModel } from '../model/types';
import {ButtonAddItem} from "@/6_shared/BaseComponents/ButtonAddItem";

export const BaseAbonementCard = (props: BaseAbonementCardModel) => {
    const navigate = useNavigate();

    // const cardClickHandler = (id: number) => {
    //     navigate(`/abonements/${id}`);
    // };

    return (

        <div
            className={`bg-white gap-12 rounded-2xl flex flex-col justify-between px-4 py-5 border-2`}
        >
            <div className={'w-full flex  justify-between'}>
                <p>{props.id}</p>
                <p className={'text-xl'}>{props.title}</p>
                <div className={`text-right`}>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className={'w-full flex justify-between items-center'}>
                <div className={'flex flex-wrap gap-1'}>
                    <p>{props.full_time}</p>
                    <p>{props.full_price}</p>
                </div>
                <div className={'ml-8'}>
                    <ButtonAddItem
                        text={''}
                        clickHandler={() => navigate(`/abonements/${props.id}`)}
                    />
                </div>
            </div>
        </div>
    );
};
