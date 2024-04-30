import { ManagerCreateOrderAbonementForm } from '@/3_widgets/ManagerCreateOrderAbonementForm/ManagerCreateOrderAbonementForm';
import { ButtonBack } from '@/6_shared/BaseComponents/ButtonBack/ButtonBack';
import { useNavigate } from 'react-router-dom';

export const ManagerCreateOrderAbonement = () => {
    const navigate = useNavigate();
    return (
        <>
            <ButtonBack clickHandler={() => navigate('/abonements')} />
            <ManagerCreateOrderAbonementForm />
        </>
    );
};
