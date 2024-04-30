import { CreateAbonementForm } from '@/3_widgets/CreateAbonementForm/CreateAbonementForm';
import { ButtonBack } from '@/6_shared/BaseComponents/ButtonBack/ButtonBack';
import { useNavigate } from 'react-router-dom';

export const CreateAbonementPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <ButtonBack clickHandler={() => navigate('/manage-abonements')} />
            <CreateAbonementForm />
        </>
    );
};
