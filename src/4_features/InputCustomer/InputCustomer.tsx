import InputMask from 'react-input-mask';
interface props {
    customer: string,
    type: string
}
export const InputCustomer = ({customer, type} : props) => {
    const styles = "w-full 2xl:m-0 m-1 p-3 rounded-lg "
    return (
        <div className={`2xl:h-32 h-full md:flex border border-gray-500 rounded-lg p-3 mt-3`}>
            <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left text-center text-white`}>{customer}</p>

            <div className={`w-full 2xl:w-4/6 h-full flex flex-col justify-between items-start`}>
                <input className={styles} type="tel" placeholder="ФИО"/>
                {type == 'tel' && (
                    <InputMask className={styles} placeholder="+7 (___) ___-__-__" mask="+7 (999) 999-99-99"/>
                )}
                {type == 'age' && (
                    <input className={styles} type="number" placeholder="Возраст"/>
                )}
            </div>
        </div>
    );
};
