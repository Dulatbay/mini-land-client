import { useEffect, useState } from 'react';
import { AbonementCard } from '@/5_entities/abonement/ui/AbonementCard';
import { Spinner } from '@/6_shared/BaseComponents/Spinner/Spinner';
import { useLazyGetAbonementByPhoneNumberQuery } from '@/5_entities/abonement/api/abonementApi';
import { ResponseAbonementCardModel } from '@/5_entities/abonement/model/types';

export const OrderByPhoneNumberForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [getAbonements, { isLoading, isError, isSuccess, data, error }] =
        useLazyGetAbonementByPhoneNumberQuery();
    const [abonements, setAbonements] = useState<ResponseAbonementCardModel[]>(
        []
    );

    const handleDeleteSuccess = (deletedId: number) => {
        setAbonements((prevAbonements) =>
            prevAbonements.filter((abonement) => abonement.id !== deletedId)
        );
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (phoneNumber.trim()) {
            getAbonements(phoneNumber);
        }
    };

    useEffect(() => {
        if (isSuccess && data) {
            setAbonements(data);
        }
    }, [isSuccess, data]);

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md p-6 max-w-6xl mx-auto">
            <div className="flex flex-col">
                <img
                    className="w-24 h-auto mb-4"
                    src="/icons/Logo.svg"
                    alt="Logo"
                />
                <h1 className="text-2xl font-medium mb-6">
                    Создать або по номеру
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 gap-4 items-center w-full max-w-lg"
                >
                    <input
                        type="text"
                        placeholder="Номер телефона"
                        className="border border-gray-300 rounded-lg p-2 w-full"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="bg-green-500 text-white rounded-lg px-4 py-2 w-full justify-self-center"
                    >
                        ОТПРАВИТЬ
                    </button>
                </form>
            </div>
            <div className="mt-6">
                <h2 className="text-sm">Найденный абонемент</h2>
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {isLoading ? (
                        <Spinner />
                    ) : (
                        Array.isArray(abonements) &&
                        abonements.map((abonement) => (
                            <AbonementCard
                                key={abonement.id}
                                id={abonement.id}
                                client_name={abonement.client_name}
                                base_abonement_id={abonement.base_abonement_id}
                                base_abonement_name={
                                    abonement.base_abonement_name
                                }
                                base_abonement_description={
                                    abonement.base_abonement_description
                                }
                                base_abonement_price={
                                    abonement.base_abonement_price
                                }
                                base_abonement_time={
                                    abonement.base_abonement_time
                                }
                                quantity={abonement.quantity}
                                onDeleteSuccess={handleDeleteSuccess}
                            />
                        ))
                    )}
                    {isSuccess && abonements.length === 0 && (
                        <div className="col-span-full text-gray-500">
                            Абонементы не найдены.
                        </div>
                    )}
                    {isError && (
                        <div className={'w-[95%] m-auto text-gray-700'}>
                            <p>Не удалось получить данные</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
