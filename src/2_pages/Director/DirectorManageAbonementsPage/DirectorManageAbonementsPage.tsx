import { DirectorManageAbonementsCardList } from '@/4_features/DirectorManageAbonementsCardList/DirectorManageAbonementsCardList';
import { ButtonAddItem } from '@/6_shared/BaseComponents/ButtonAddItem';
import { useNavigate } from 'react-router-dom';

export const DirectorManageAbonementsPage = () => {
    const navigate = useNavigate();
    const createClickHandler = () => {
        navigate('/create-abonement');
    };

    return (
        <div className={'w-[95%] m-auto'}>
            <div className={`flex justify-between items-center pt-7`}>
                <div className={`text-[24px] md:text-[30px]`}>
                    Ваши абонементы
                </div>
                <ButtonAddItem
                    text={'Создать абонемент'}
                    clickHandler={createClickHandler}
                />
            </div>
            <DirectorManageAbonementsCardList />
        </div>
    );
};
