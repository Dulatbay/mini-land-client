import { InputCustomerPhone } from '@/4_features/InputCustomerPhone/InputCustomerPhone';
import { useState } from 'react';
import subscriptions from './subsciptions';
import { OrderDetailsCard } from '@/4_features/OrderDetailsCard/OrderDetailsCard';

export const OrderByPhoneNumberForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [subscription, setSubscription] = useState<{
        phone: string;
        name: string;
        description: string;
        price: string;
        duration: string;
        clientName: string;
        visitsLeft: number;
    } | null>(null);
    const [error, setError] = useState('');

    const handleSearch = () => {
        const foundSubscription = subscriptions.find(
            (sub) => sub.phone === phoneNumber
        );
        if (foundSubscription) {
            setSubscription(foundSubscription);
            setError(''); // Clear any previous errors
        } else {
            setSubscription(null); // Clear previous subscription details
            setError(
                'Subscription not found. Please try again later or check the phone number.'
            );
        }
    };

    return (
        <div>
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
                    <p className={`font-medium`}>Создать або по номеру</p>
                </div>

                <InputCustomerPhone
                    value={phoneNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setPhoneNumber(e.target.value)
                    }
                />

                <button
                    className="all-unset absolute w-52 h-12 top-36 left-1/4 bg-green-500 rounded-md shadow-md text-white text-center py-2"
                    onClick={handleSearch}
                >
                    ОТПРАВИТЬ
                </button>
                {error && (
                    <div className="text-red-500 text-sm absolute top-56 left-10">
                        {error}
                    </div>
                )}
                {subscription && (
                    <div className="flex gap-6 absolute top-60 left-9">
                        <OrderDetailsCard
                            orderDetails={{
                                ...subscription,
                                orderName: subscription.name,
                                description: subscription.description,
                                price: subscription.price,
                                duration: subscription.duration,
                                clientName: subscription.clientName,
                                visitsLeft: subscription.visitsLeft,
                            }}
                        />
                    </div>
                )}
            </form>
        </div>
    );
};
