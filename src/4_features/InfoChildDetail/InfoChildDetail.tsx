const styles = "w-full 2xl:m-0 m-1 p-3 rounded-lg ";

interface Props {
    childName: string,
    childAge: number
}

const InfoChildDetail = ({childName, childAge}: Props) => {
    return (
        <div className={`2xl:h-32 h-full md:flex border border-gray-500 rounded-lg p-3 mt-3`}>
            <p className={`w-full md:w-2/6 lg:w-3/6 2xl:w-2/6 md:text-left text-center text-white`}>Ребенок</p>

            <div className={`w-full 2xl:w-4/6 h-full flex flex-col justify-between items-start`}>
                <input
                    className={styles}
                    placeholder="ФИО"
                    value={childName}
                    readOnly={true}
                />

                <input
                    className={styles}
                    type="number"
                    placeholder="Возраст"
                    value={childAge}
                    readOnly={true}
                />
            </div>
        </div>
    );
};

export default InfoChildDetail;