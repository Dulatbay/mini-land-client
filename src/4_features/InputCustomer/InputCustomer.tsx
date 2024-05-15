import { useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import { RequestOrder, setRequestOrder } from '@/5_entities/orderForm';

interface Props {
    customer: string;
    type: 'tel' | 'age';
    requestOrder:
        | {
              child_age: number | undefined;
              parent_phone_number: string | undefined;
              child_name: string | undefined;
              parent_name: string | undefined;
          }
        | undefined;
    displayField: 'parent_name' | 'child_name' | undefined;
    readonly?: boolean;
}

const styles = 'w-full 2xl:m-0 p-3 rounded-lg border-2 focus:outline-gray-300';

export const InputCustomer = ({
    customer,
    type,
    requestOrder,
    displayField,
    readonly,
}: Props) => {
    const dispatch = useDispatch();

    const handleInputChange = (
        valueToChange:
            | 'child_age'
            | 'parent_phone_number'
            | 'child_name'
            | 'parent_name',
        value: string | number | undefined
    ) => {
        const request = { ...requestOrder } ?? ({} as RequestOrder);
        // @ts-ignore
        request[valueToChange] = value;
        dispatch(setRequestOrder(request as RequestOrder));
    };

    return (
        <div
            className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3`}
        >
            <p
                className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left text-center`}
            >
                {customer}
            </p>
            <div
                className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-start gap-2`}
            >
                <input
                    className={styles}
                    placeholder="ФИО"
                    onChange={(e) =>
                        handleInputChange(
                            type == 'tel' ? 'parent_name' : 'child_name',
                            e.target.value
                        )
                    }
                    value={requestOrder?.[displayField!]}
                    readOnly={readonly}
                />
                {type === 'tel' && (
                    <InputMask
                        className={styles}
                        placeholder="+7 (___) ___-__-__"
                        mask="+7 (999) 999-99-99"
                        onChange={(e) =>
                            handleInputChange(
                                'parent_phone_number',
                                e.target.value
                            )
                        }
                        value={requestOrder?.parent_phone_number}
                        readOnly={readonly}
                    />
                )}
                {type === 'age' && (
                    <input
                        className={styles}
                        type="number"
                        placeholder="Возраст"
                        onChange={(e) =>
                            handleInputChange(
                                'child_age',
                                Number(e.target.value)
                            )
                        }
                        value={requestOrder?.child_age}
                        readOnly={readonly}
                    />
                )}
            </div>
        </div>
    );
};
