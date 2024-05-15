import { Button } from '@/6_shared/BaseComponents/Button/Button.tsx';
import { selectAllPrices, useAllPricesQuery } from '@/5_entities/price';
import { InputCustomer } from '@/4_features/InputCustomer/InputCustomer.tsx';
import { InputOrder } from '@/4_features/InputOrder/ui/InputOrder.tsx';
import { OrderInfoCreate } from '@/4_features/OrderInfo/ui/OrderInfoCreate.tsx';
import { useAppDispatch, useAppSelector } from '@/1_app/hooks.ts';
import {
    RequestOrder,
    selectRequestOrder,
    setRequestOrder,
} from '@/5_entities/orderForm';
import { MouseEvent, useEffect } from 'react';
import {
    RequestCreateOrderDto,
    useCreateOrderMutation,
} from '@/5_entities/order';
import { getFullTime } from '@/6_shared/lib/getFullTime.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { greenBg } from '@/6_shared/lib/colors.ts';
import { getToastMessage } from '@/6_shared/lib/getToastMessage.ts';
import { toast } from 'react-toastify';
import { useAllAbonementsQuery } from '@/5_entities/abonement/api/abonementApi';

const customer = 'Клиент';
const child = 'Ребенок';
const type1 = 'tel';
const type2 = 'age';

const isAvailableToSend = (order: RequestOrder | undefined): boolean => {
    if (!order) {
        return false;
    }

    const neededProperties: (keyof RequestOrder)[] = [
        'child_age',
        'child_name',
        'parent_name',
    ];

    const result = neededProperties.every((prop) => {
        return order[prop] !== undefined;
    });

    const saleTime = order.sale?.full_time ?? 0;
    const extraTime =
        (order?.extra_time_minute ?? 0) * 60 +
        (order?.extra_time_hour ?? 0) * 3600;

    if (!result) {
        return false;
    }

    if (order['child_age']! < 1 || order['child_age']! > 15) {
        return false;
    }

    return saleTime + extraTime >= 30;
};

export const OrderFormCreate = () => {
    const requestOrder = useAppSelector(selectRequestOrder);
    const prices = useAppSelector(selectAllPrices);
    const dispatch = useAppDispatch();
    const [createOrder, { isLoading, isError, error, isSuccess }] =
        useCreateOrderMutation();
    const navigate = useNavigate();
    useAllPricesQuery();

    const { abonementId } = useParams();
    const { data } = useAllAbonementsQuery(true);

    useEffect(() => {
        const firstOrder = data?.find(
            (abonement) => abonement.id === parseInt(abonementId ?? '-1', 10)
        );

        if (abonementId && firstOrder) {
            dispatch(
                setRequestOrder({
                    child_age: firstOrder.child_age,
                    child_name: firstOrder.child_name,
                    parent_name: firstOrder.client_name,
                    parent_phone_number: firstOrder.phone_number,
                } as RequestOrder)
            );
        }
    }, [data]);

    const isPaidCheckBoxHandler = (event: MouseEvent<HTMLInputElement>) => {
        const request = { ...requestOrder } ?? ({} as RequestOrder);
        request.is_paid = event.currentTarget.checked;
        dispatch(setRequestOrder(request as RequestOrder));
    };

    const sendButtonHandler = () => {
        if (!requestOrder) {
            toast.error('Заполните данные!');
            return;
        }
        const body: RequestCreateOrderDto = {
            child_age: requestOrder.child_age!,
            child_name: requestOrder.child_name!,
            parent_name: requestOrder.parent_name!,
            parent_phone_number: requestOrder.parent_phone_number!,
            extra_time: getFullTime(
                requestOrder.extra_time_hour ?? 0,
                requestOrder.extra_time_minute ?? 0
            ),
            is_paid: requestOrder.is_paid ?? false,
            sale_id: requestOrder.sale?.id,
            sale_with_percent_id: requestOrder.sale_with_percent?.id,
        };

        createOrder(body);
    };
    useEffect(() => {
        if (isError) getToastMessage(error);
    }, [isError, error]);

    if (isSuccess) {
        setTimeout(() => {
            window.location.reload();
        }, 100);
        navigate('/');
    }

    const canSendOrder = abonementId || isAvailableToSend(requestOrder);

    return (
        <form
            className={`w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 mt-7 md:mt-0 p-10 border-2 m-auto rounded-3xl bg-white`}
        >
            <div
                className={`w-full pb-3 flex flex-col md:justify-between items-center`}
            >
                <img
                    src={'/icons/Logo.svg'}
                    className={`w-32 object-contain`}
                    style={{ backgroundPosition: 'center' }}
                    alt={''}
                />
                <p className={`font-medium`}>Создать заказ</p>
            </div>
            <InputCustomer
                customer={customer}
                type={type1}
                requestOrder={requestOrder}
                displayField={'parent_name'}
                readonly={!!abonementId}
            />
            <InputCustomer
                customer={child}
                type={type2}
                requestOrder={requestOrder}
                displayField={'child_name'}
                readonly={!!abonementId}
            />
            <InputOrder requestOrder={requestOrder} />
            <OrderInfoCreate requestOrder={requestOrder} prices={prices} />
            <label className={''}>
                <span className={'mr-1'}>Заказ оплачен:</span>
                <input type="checkbox" onClick={isPaidCheckBoxHandler} />
            </label>
            <div className={`w-full sm:flex justify-between pt-6 gap-20`}>
                <Button
                    disabled={!canSendOrder || isLoading}
                    backgroundColor={greenBg}
                    content={'ОТПРАВИТЬ'}
                    onClick={sendButtonHandler}
                />
            </div>
        </form>
    );
};
