import { useNavigate } from 'react-router-dom';
import { getTime } from '@/6_shared/lib/getTime.ts';
import { ResponseCardRoomOrderDto } from '@/5_entities/roomOrder/model/types.ts';

export const RoomOrderCard = (childRecord: ResponseCardRoomOrderDto) => {
    const navigate = useNavigate();

    // Assuming `childRecord.ended_time` is a timestamp in milliseconds.
    const endedTime = new Date(childRecord.ended_time).getTime();
    const currentTime = Date.now();
    const remain_time = endedTime - currentTime;

    const cardClickHandler = (id: number) => {
        navigate(`/room-orders/${id}`);
    };

    return (
        <div
            className={`bg-white cursor-pointer 
            w-80 2xl:w-3/12 h-40 lg:h-60 m-2 p-5 
            border-4 border-transparent rounded-2xl
            flex flex-col items-center justify-between 
            transition ease-in-out duration-500 
            hover:bg-transparent hover:text-black hover:shadow-2xl hover:bg-gray-100`}
            onClick={() => cardClickHandler(childRecord.id)}
        >
            <div className={`w-full flex justify-between`}>
                <h5>{childRecord.author_name}</h5>
                <p>
                    {remain_time < 0 ? 'Прошло: ' : 'Осталось: '}
                    {getTime(remain_time < 0 ? -remain_time : remain_time)}
                </p>
            </div>
            <div className={`w-full flex flex-col justify-start items-start`}>
                <p>Оставил: {childRecord.client_name}</p>
                <p>
                    Вход:{' '}
                    {new Date(childRecord.day_of_booking).toLocaleString()}
                </p>
                <p>
                    Выход: {new Date(childRecord.ended_time).toLocaleString()}
                </p>
            </div>
        </div>
    );
};
