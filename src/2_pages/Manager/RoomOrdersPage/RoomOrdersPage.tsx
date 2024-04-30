import { ButtonAddItem } from '@/6_shared/BaseComponents/ButtonAddItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/1_app/hooks';
import {
    selectRequestParams,
    setRequestParams,
} from '@/5_entities/order/model/slice';
import { RoomOrderCardList } from '@/4_features/RoomOrderCardList/RoomOrderCardList';

const FilterCheckbox = ({
    id,
    label,
    defaultChecked,
}: {
    id: string;
    label: string;
    defaultChecked: boolean;
}) => {
    const [checked, setChecked] = useState(defaultChecked);
    const appDispatch = useAppDispatch();
    const handleCheckboxClick = () => {
        appDispatch(setRequestParams({ id: id, checked: !checked }));
        setChecked(!checked);
    };

    return (
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600 px-2 select-none">
            <div className="flex items-center ps-3">
                <input
                    id={id}
                    type="checkbox"
                    onChange={handleCheckboxClick}
                    defaultChecked={defaultChecked}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                    htmlFor={id}
                    className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    {label}
                </label>
            </div>
        </li>
    );
};

export const RoomOrdersPage = () => {
    const navigate = useNavigate();
    const requestParams = useAppSelector(selectRequestParams);

    const createOrderClickHandler = () => {
        navigate('/room-tariffs');
    };

    return (
        <div className={'w-[95%] m-auto'}>
            <div
                className={`w-[95%] flex justify-between items-start m-auto pt-7 flex-wrap`}
            >
                <div className={`text-[24px] md:text-[30px]`}>
                    Ваши брони на ближайшие дни
                </div>
                <div
                    className={
                        'flex gap-8 items-end flex-wrap md:flex-nowrap items-center'
                    }
                >
                    <div className={'w-full'}>
                        <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                            Фильтры
                        </h3>
                        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <FilterCheckbox
                                id={'myOrders'}
                                label="Мои заказы"
                                defaultChecked={requestParams.myOrders}
                            />
                            <FilterCheckbox
                                id="finished"
                                label="Завершенные"
                                defaultChecked={requestParams.finished}
                            />
                            <FilterCheckbox
                                id="inProcess"
                                label="В процессе"
                                defaultChecked={requestParams.inProcess}
                            />
                            <FilterCheckbox
                                id="overdue"
                                label="Прошедшие"
                                defaultChecked={requestParams.overdue}
                            />
                            <FilterCheckbox
                                id="paid"
                                label="Оплаченные"
                                defaultChecked={requestParams.paid}
                            />
                        </ul>
                    </div>
                    <div className={'min-w-44'}>
                        <ButtonAddItem
                            text={'Создать бронь'}
                            clickHandler={createOrderClickHandler}
                        />
                    </div>
                </div>
            </div>
            <div
                className={
                    'w-[95%] m-auto flex flex-col items-stretch gap-10 mt-10'
                }
            >
                <RoomOrderCardList />
            </div>
        </div>
    );
};
