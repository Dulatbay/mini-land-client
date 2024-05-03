import { useAllBaseAbonementsQuery } from '@/5_entities/base-abonement/api/baseAbonementApi';

interface AbonementTitleProps {
    id: number;
}

export const AbonementTitle = ({ id }: AbonementTitleProps) => {
    const { data } = useAllBaseAbonementsQuery(true);

    return (
        <div>
            {data?.map((abonement) => {
                if (abonement.id === id) {
                    return (
                        <p
                            key={abonement.id}
                            className="
                            text-gray-700
                            font-smaller
                        "
                        >
                            Выбранный абонемент:&nbsp;
                            <span
                                className={
                                    'font-bold text-black-700 font-smaller'
                                }
                            >
                                {abonement.title}
                            </span>
                        </p>
                    );
                }
            })}
        </div>
    );
};
