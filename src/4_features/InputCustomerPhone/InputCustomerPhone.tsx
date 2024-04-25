import { Props } from 'react-apexcharts';
import InputMask from 'react-input-mask';

const styles = 'w-full 2xl:m-0 p-3 rounded-lg border-2 focus:outline-gray-300';

export const InputCustomerPhone = ({ value, onChange }: Props) => {
    return (
        <div
            className={`h-full md:flex border border-gray-500 rounded-lg p-3 mt-3`}
        >
            <p
                className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left text-center`}
            >
                Телефон
            </p>
            <div
                className={`w-full 2xl:w-4/6 h-full pb-2 flex flex-col justify-center items-start gap-2`}
            >
                <InputMask
                    className={styles}
                    placeholder="+7 (___) ___-__-__"
                    mask="+7 (999) 999-99-99"
                    value={value}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};
