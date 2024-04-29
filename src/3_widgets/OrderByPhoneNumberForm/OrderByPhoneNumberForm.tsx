import React, { useEffect, useState } from 'react';
import { AbonementCard } from '@/5_entities/abonement/ui/AbonementCard';
import { Spinner } from '@/6_shared/BaseComponents/Spinner/Spinner';
import { useLazyGetAbonementByPhoneNumberQuery } from '@/5_entities/abonement/api/abonementApi';
import { ResponseAbonementCardModel } from '@/5_entities/abonement/model/types';

export const OrderByPhoneNumberForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [getAbonements, status] = useLazyGetAbonementByPhoneNumberQuery();
    const [abonements, setAbonements] = useState<ResponseAbonementCardModel[]>(
        []
    );

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        getAbonements(phoneNumber);
    };

    useEffect(() => {
        if (status.isSuccess) {
            setAbonements(status.data ?? []);
        }
    }, [status]);

    if (status.isLoading) return <Spinner />;
    if (status.isError) return <div>Error: {status.error?.toString()}</div>;

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
                        className="bg-green-500 text-white rounded-lg px-4 py-2 w-full justify-self-center" // Button width is full, but it will only be as wide as its column
                    >
                        ОТПРАВИТЬ
                    </button>
                </form>
            </div>
            <div className="mt-6">
                <h2 className="text-sm">Найденный абонемент</h2>
                <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {Array.isArray(abonements) &&
                        abonements.map((abonement) => (
                            <AbonementCard
                                key={abonement.id}
                                id={abonement.id}
                                client_name={abonement.client_name}
                                base_abonement={{
                                    title:
                                        abonement.client_name ??
                                        'Default Title',
                                    // description:
                                    //     abonement.base_abonement?.description ??
                                    //     'Default Description',
                                    // full_time:
                                    //     abonement.base_abonement?.full_time ??
                                    //     0,
                                    // full_price:
                                    //     abonement.base_abonement?.full_price ??
                                    //     0,
                                    quantity: abonement.quantity ?? 0,
                                }}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};
