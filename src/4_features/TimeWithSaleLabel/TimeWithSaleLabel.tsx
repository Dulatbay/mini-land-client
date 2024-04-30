import { getTime } from '@/6_shared/lib/getTime.ts';
import { SaleModel } from '@/5_entities/sale';
import { SaleWithPercentOrder } from '@/5_entities/orderForm/model/types';

interface Props {
    sale?: SaleModel;
    sale_with_percent?: SaleWithPercentOrder;
    extraTime: number;
    enteredTime: string;
    remainTime: number;
    fullTime: number;
    fullPrice: number;
    authorName: string;
}

function TimeWithSaleLabel({
    sale,
    sale_with_percent,
    extraTime,
    enteredTime,
    remainTime,
    fullTime,
    fullPrice,
    authorName,
}: Props) {
    return (
        <div
            className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3`}
        >
            <p
                className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 text-center md:text-left text-white`}
            >
                Заказ
            </p>
            <div
                className={`w-full 2xl:w-4/6 h-full flex flex-col justify-between items-start`}
            >
                {sale ? (
                    <>
                        <select
                            className={`w-full p-3 rounded-lg mb-3.5 disabled:opacity-100`}
                            defaultValue={0}
                            disabled
                        >
                            {
                                <option key={sale.id} value={0}>
                                    {sale.title}, {sale.full_price}тг,{' '}
                                    {getTime(sale.full_time)}
                                </option>
                            }
                        </select>
                    </>
                ) : (
                    <span className={`text-white`}>Акции нет</span>
                )}
                {sale_with_percent ? (
                    <>
                        <select
                            className={`w-full p-3 rounded-lg mb-3.5 disabled:opacity-100`}
                            defaultValue={0}
                            disabled
                        >
                            {
                                <option key={sale_with_percent.id} value={0}>
                                    {sale_with_percent.title},{' '}
                                    {sale_with_percent.percent}% скидка
                                </option>
                            }
                        </select>
                    </>
                ) : (
                    <span className={`text-white`}>Акции с процентом нет</span>
                )}
                {extraTime != 0 ? (
                    <span className={`text-white`}>
                        Дополнительно добавленное время: {getTime(extraTime)}
                    </span>
                ) : (
                    ''
                )}
                <span className={`text-white`}>
                    Вошел в садик: {enteredTime}
                </span>
                {remainTime > 0 ? (
                    <span className={`text-white`}>
                        {' '}
                        Осталось времени: {getTime(remainTime)}
                    </span>
                ) : (
                    <span className={`text-white`}>
                        {' '}
                        Прошло времени: {getTime(remainTime * -1)}
                    </span>
                )}
                <span className={`text-white`}>
                    Общее время: {getTime(fullTime)}
                </span>
                <span className={'text-white'}>
                    Общая стоимость: {fullPrice} тг
                </span>
                <span className={'text-white'}>Заказ принял: {authorName}</span>
            </div>
        </div>
    );
}

export default TimeWithSaleLabel;
