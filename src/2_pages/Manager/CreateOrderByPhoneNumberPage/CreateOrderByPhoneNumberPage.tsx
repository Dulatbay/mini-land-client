import { ButtonBack } from '@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx';
import { useAppDispatch } from '@/1_app/hooks.ts';
import { clearAll } from '@/5_entities/orderForm';
import { useNavigate } from 'react-router-dom';
import { OrderByPhoneNumberForm } from '@/3_widgets/OrderByPhoneNumberForm/OrderByPhoneNumberForm';

export const CreateOrderByPhoneNumberPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <div
                onClick={() => {
                    dispatch(clearAll());
                }}
            >
                <ButtonBack clickHandler={() => navigate('/')} />
            </div>

            <OrderByPhoneNumberForm />
        </div>
    );
};
