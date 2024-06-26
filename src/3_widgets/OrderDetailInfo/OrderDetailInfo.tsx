import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/6_shared/BaseComponents/Button/Button.tsx';
import InfoParentDetail from '@/4_features/InfoParentDetail/InfoParentDetail.tsx';
import InfoChildDetail from '@/4_features/InfoChildDetail/InfoChildDetail.tsx';
import TimeWithSaleLabel from '@/4_features/TimeWithSaleLabel/TimeWithSaleLabel.tsx';
import { getBackgroundColorByOrderInfo } from '@/6_shared/lib/getBackgroundColorByOrderInfo.ts';
import React, { useEffect, useState } from 'react';
import {
    useFinishOrderByIdMutation,
    useLazyGetOrderByIdQuery,
} from '@/5_entities/order';
import { getBorderColorByOrderInfo } from '@/6_shared/lib/getBorderColorByOrderInfo.ts';
import { getToastMessage } from '@/6_shared/lib/getToastMessage.ts';
import { Spinner } from '@/6_shared/BaseComponents/Spinner/Spinner.tsx';

export const OrderDetailInfo = () => {
    const { id } = useParams();
    const [trigger, result] = useLazyGetOrderByIdQuery();
    const { data, isLoading, isError, error } = result;
    const [isPaid, setIsPaid] = useState(false);
    const [updateOrder] = useFinishOrderByIdMutation();
    const navigate = useNavigate();

    useEffect(() => {
        setIsPaid(data?.is_paid ?? false);
    }, [data]);

    useEffect(() => {
        if (isError) {
            getToastMessage(error);
            navigate('/orders');
        }
    }, [isError, error]);

    if (id && !isNaN(+id) && !isLoading && result.status === 'uninitialized') {
        trigger(+id);
    } else if (!id || isNaN(+id)) {
        return 'Not Found';
    }

    if (isLoading) {
        return <Spinner />;
    }

    const isPaidCheckBoxHandler = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsPaid(event.target.checked);
    };

    const endButtonHandler = () => {
        updateOrder({ id: +id, isPaid: isPaid }).then(() => navigate('/'));
    };

    if (!data) {
        return <p className={'text-gray-700'}>Не удалось найти</p>;
    }

    return (
        <form
            className={`${getBorderColorByOrderInfo(
                data.is_finished,
                data.remain_time
            )} w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 mt-10 md:mt-0 p-10 border-8 m-auto rounded-3xl bg-gray-700`}
        >
            <div
                className={`w-full md:w-9/12 pb-3 flex flex-col md:flex-row md:justify-between items-center`}
            >
                <img
                    src={'/icons/Logo.svg'}
                    className={`w-32 object-contain`}
                    style={{ backgroundPosition: 'center' }}
                    alt={''}
                />
                <p className={`text-white pt-3`}>Информация о заказе</p>
            </div>
            <Button
                content={'Добавить мастер класс ->'}
                backgroundColor={'bg-green-700'}
                onClick={() => {
                    navigate(`/master-classes/${id}`);
                }}
            />
            <Button
                content={'Посмотреть добавленные ->'}
                color={'text-gray-700'}
                border={'border rounded mt-2'}
                onClick={() => {
                    navigate(`/orders/${id}/master-classes`);
                }}
            />
            <InfoParentDetail
                parentName={data.parent_name}
                parentPhoneNumber={data.parent_phone_number}
            />
            <InfoChildDetail
                childName={data.child_name}
                childAge={data.child_age}
            />
            <TimeWithSaleLabel
                extraTime={data.extra_time}
                sale={data.sale}
                sale_with_percent={data.sale_with_percent}
                fullTime={data.full_time}
                fullPrice={data.full_price}
                enteredTime={data.entered_time}
                remainTime={data.remain_time}
                authorName={data.author_name}
            />
            <label className={'text-white'}>
                <span className={'ml-1'}>Заказ оплачен:</span>
                <input
                    type="checkbox"
                    onChange={isPaidCheckBoxHandler}
                    defaultChecked={data.is_paid}
                    disabled={data.is_paid}
                />
            </label>
            <div className={`w-full sm:flex justify-between pt-6`}>
                {data.is_finished ? (
                    <Button
                        content={'ЗАВЕРШЕН'}
                        backgroundColor={getBackgroundColorByOrderInfo(
                            data.is_finished,
                            data.remain_time
                        )}
                        disabled={true}
                    />
                ) : (
                    <Button
                        content={'ЗАВЕРШИТЬ'}
                        backgroundColor={getBackgroundColorByOrderInfo(
                            data.is_finished,
                            data.remain_time
                        )}
                        disabled={!isPaid}
                        onClick={endButtonHandler}
                    />
                )}
            </div>
        </form>
    );
};
