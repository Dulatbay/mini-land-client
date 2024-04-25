import { useCreateBaseAbonementMutation } from '@/5_entities/base-abonement/api/baseAbonementApi';
import { Button } from '@/6_shared/BaseComponents/Button/Button';
import { CommonInput } from '@/6_shared/BaseComponents/CommonInput/CommonInput';
import { greenBg } from '@/6_shared/lib/colors';
import { getToastMessage } from '@/6_shared/lib/getToastMessage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CreateAbonementForm = () => {
    const navigate = useNavigate();
    const [titleRequest, setTitleRequest] = useState<undefined | string>();
    const [descriptionRequest, setDescriptionRequest] = useState<
        undefined | string
    >();
    const [priceRequest, setPriceRequest] = useState<undefined | number>();
    const [durationRequest, setDurationRequest] = useState<
        undefined | number
    >();
    const [quantityRequest, setQuantityRequest] = useState<
        undefined | number
    >();

    const [createAbonement, { isLoading, isError, error, isSuccess }] =
        useCreateBaseAbonementMutation();

    const isAvailable = () => {
        return !(
            titleRequest &&
            priceRequest &&
            descriptionRequest &&
            durationRequest &&
            quantityRequest
        );
    };

    const createClickHandler = () => {
        const requestData = {
            title: titleRequest!,
            description: descriptionRequest!,
            full_price: priceRequest!,
            full_time: durationRequest!,
            quantity: quantityRequest!,
        };

        createAbonement(requestData);
    };

    useEffect(() => {
        if (isError) getToastMessage(error);
    }, [isError, error]);

    if (isSuccess) {
        setTimeout(() => {
            window.location.reload();
        }, 10);
        navigate('/manage-abonements');
    }

    return (
        <div
            className={`w-2/3 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4 mt-10 md:mt-0 p-10 border-2 m-auto rounded-3xl bg-white`}
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
                <p className={`pt-3 text-2xl font-medium`}>Создать абонемент</p>
            </div>
            <form className={'mt-8 flex flex-col gap-4'} method="POST">
                <CommonInput
                    placeholder={'Название'}
                    onChange={(event) => {
                        setTitleRequest(event.currentTarget.value);
                    }}
                />
                <CommonInput
                    placeholder={'Описание'}
                    onChange={(event) => {
                        setDescriptionRequest(event.currentTarget.value);
                    }}
                />
                <CommonInput
                    placeholder={'Цена'}
                    type={'number'}
                    onChange={(event) => {
                        setPriceRequest(+event.currentTarget.value);
                    }}
                />
                <CommonInput
                    placeholder={'Время(в минутах)'}
                    type={'number'}
                    onChange={(event) => {
                        setDurationRequest(+event.currentTarget.value);
                    }}
                />
                <CommonInput
                    placeholder={'Кол-во посещений'}
                    type={'number'}
                    onChange={(event) => {
                        setQuantityRequest(+event.currentTarget.value);
                    }}
                />
                <div className={`w-full mt-4`}>
                    <Button
                        backgroundColor={greenBg}
                        content={'ОТПРАВИТЬ'}
                        onClick={createClickHandler}
                        disabled={isAvailable() || isLoading}
                    />
                </div>
            </form>
        </div>
    );
};
