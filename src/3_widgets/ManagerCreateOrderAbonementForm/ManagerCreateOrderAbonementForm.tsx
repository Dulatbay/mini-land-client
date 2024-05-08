import { AbonementTitle } from '@/4_features/AbonementTitle/AbonementTitle';
import { useCreateAbonementMutation } from '@/5_entities/abonement/api/abonementApi';
import { Button } from '@/6_shared/BaseComponents/Button/Button';
import { CommonInput } from '@/6_shared/BaseComponents/CommonInput/CommonInput';
import { Spinner } from '@/6_shared/BaseComponents/Spinner/Spinner';
import { greenBg } from '@/6_shared/lib/colors';
import { getToastMessage } from '@/6_shared/lib/getToastMessage';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InputMask from 'react-input-mask';

export const ManagerCreateOrderAbonementForm = () => {
    const navigate = useNavigate();
    const { abonementId } = useParams();
    const [clientName, setClientName] = useState<undefined | string>();
    const [clientPhoneNumber, setClientPhoneNumber] = useState<
        undefined | string
    >();
    const [childName, setChildName] = useState<undefined | string>();
    const [childAge, setChildAge] = useState<undefined | number>();

    const [createAbonement, { isLoading, isError, error, isSuccess }] =
        useCreateAbonementMutation();

    const isAvailable = () => {
        return !(clientName && clientPhoneNumber && childName && childAge);
    };

    const createClickHandler = () => {
        const requestData = {
            client_name: clientName!,
            phone_number: clientPhoneNumber!,
            child_name: childName!,
            child_age: childAge!,
            base_abonement_id: Number.parseInt(abonementId!),
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
        navigate('/abonements');
    }

    if (isLoading) {
        return <Spinner />;
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
                    placeholder={'Имя клиента'}
                    onChange={(event) => {
                        setClientName(event.currentTarget.value);
                    }}
                />
                <InputMask
                    placeholder="+7 (___) ___-__-__"
                    mask="+7 (999) 999-99-99"
                    className={
                        'w-full 2xl:m-0 p-3 rounded-lg border-2 focus:outline-gray-300'
                    }
                    onChange={(event) => {
                        setClientPhoneNumber(event.currentTarget.value);
                    }}
                />
                <CommonInput
                    placeholder={'Имя ребенка'}
                    onChange={(event) => {
                        setChildName(event.currentTarget.value);
                    }}
                />
                <CommonInput
                    placeholder={'Возраст ребенка'}
                    type={'number'}
                    onChange={(event) => {
                        setChildAge(+event.currentTarget.value);
                    }}
                />
                <AbonementTitle id={Number.parseInt(abonementId!)} />
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
