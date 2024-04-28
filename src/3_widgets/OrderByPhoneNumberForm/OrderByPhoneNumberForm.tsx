import React, { useState } from 'react';
import { useGetAbonementByPhoneNumberQuery } from '@/5_entities/abonement/api/abonementApi';
import { AbonementCard } from '@/5_entities/abonement/ui/AbonementCard';
import { Spinner } from '@/6_shared/BaseComponents/Spinner/Spinner';

export const OrderByPhoneNumberForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const {
        data: abonements,
        isLoading,
        isError,
        error,
        refetch,
    } = useGetAbonementByPhoneNumberQuery(phoneNumber, {
        skip: phoneNumber.length === 0, // We only want to run the query when we have a phoneNumber
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        refetch();
    };

    if (isLoading) return <Spinner />;
    if (isError) return <div>Error: {error?.toString()}</div>;

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
            <div className="mt-8">
                <h2 className="text-lg font-semibold">Найденный абонемент</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {Array.isArray(abonements) &&
                        abonements.map((abonement) => (
                            <AbonementCard
                                key={abonement.id}
                                id={abonement.id}
                                client_name={abonement.client_name}
                                base_abonement={{
                                    title:
                                        abonement.base_abonement?.title ??
                                        'Default Title',
                                    description:
                                        abonement.base_abonement?.description ??
                                        'Default Description',
                                    full_time:
                                        abonement.base_abonement?.full_time ??
                                        0,
                                    full_price:
                                        abonement.base_abonement?.full_price ??
                                        0,
                                    quantity:
                                        abonement.base_abonement?.quantity ?? 0,
                                }}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};
