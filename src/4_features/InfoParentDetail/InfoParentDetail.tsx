import InputMask from "react-input-mask";

const styles = "w-full 2xl:m-0 m-1 p-3 rounded-lg ";

interface Props {
    parentName: string,
    parentPhoneNumber: string
}

const InfoParentDetail = ({parentName, parentPhoneNumber}: Props) => {
    return (
        <div className={`2xl:h-32 h-full md:flex border border-gray-500 rounded-lg p-3 mt-3`}>
            <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left text-center text-white`}>Клиент</p>

            <div className={`w-full 2xl:w-4/6 h-full flex flex-col justify-between items-start`}>
                <input
                    className={styles}
                    placeholder="ФИО"
                    value={parentName}
                    readOnly={true}
                />

                <InputMask
                    className={styles}
                    placeholder="+7 (___) ___-__-__"
                    mask="+7 (999) 999-99-99"
                    readOnly={true}
                    value={parentPhoneNumber}
                />
            </div>
        </div>
    );
};

export default InfoParentDetail;