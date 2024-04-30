import { ButtonDelete } from '@/6_shared/BaseComponents/ButtonDelete/ButtonDelete';

interface OrderDetails {
    orderName: string;
    description: string;
    price: string;
    duration: string;
    clientName: string;
    visitsLeft: number;
}

interface OrderDetailsCardProps {
    orderDetails: OrderDetails;
}

export const OrderDetailsCard = ({ orderDetails }: OrderDetailsCardProps) => {
    return (
        <>
            <div className="relative w-full md:w-96 bg-white rounded-lg overflow-hidden border-2 border-gray-300">
                <div className="absolute top-4 left-5 font-normal text-black text-lg">
                    {orderDetails?.orderName}
                </div>
                <p className="absolute top-11 left-5 text-gray-700 text-sm">
                    {orderDetails?.description}
                </p>
                <div className="flex flex-col absolute top-24 left-5 space-y-1">
                    <div className="text-black text-sm">
                        Цена: {orderDetails?.price}
                    </div>
                    <div className="text-black text-sm">
                        Время: {orderDetails?.duration}
                    </div>
                    <div className="text-black text-sm">
                        Имя клиента: {orderDetails?.clientName}
                    </div>
                    <div className="text-black text-sm">
                        Осталось посещений: {orderDetails?.visitsLeft}
                    </div>
                </div>

                <ButtonDelete
                    showIcon={true}
                    clickHandler={() => {
                        console.log('delete button clicked');
                    }}
                />
            </div>
        </>
    );
};
