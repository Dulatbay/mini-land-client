import { useNavigate } from 'react-router-dom';
import { BaseAbonementCardModelManager } from '../model/types';
import { ButtonAddItem } from '@/6_shared/BaseComponents/ButtonAddItem';

export const BaseAbonementCard = (props: BaseAbonementCardModelManager) => {
    const navigate = useNavigate();

    const cardClickHandler = () => {
        navigate(`/abonements`);
    };

    return (
        <div className="bg-white rounded-2xl flex flex-col justify-between px-4 py-5 border-2">
            <div className="w-full flex justify-center">
                <p className="text-xl font-bold">{props.title}</p>
            </div>
            <div className="w-full flex justify-center text-justify">
                <p className="text-gray-700">{props.description}</p>
            </div>
            <div className="w-full flex justify-between items-center">
                <div className="flex flex-wrap flex-col">
                    <span className="py-0.5 text-sm font-semibold text-gray-700 mr-2">
                        Цена: {props.full_price}тг
                    </span>
                    <span className="py-0.5 text-sm font-semibold text-gray-700 mr-2">
                        Время: {props.full_time} минут
                    </span>
                </div>
                <ButtonAddItem
                    text={''}
                    clickHandler={cardClickHandler} // менеджердегі абонементті қосу бетіне өтуі керек бірақ пэйджды таппадым
                />
            </div>
        </div>
    );
};
