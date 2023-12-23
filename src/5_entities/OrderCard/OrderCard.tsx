interface props {
    fullname: string,
    status: string,
    madeBy: string,
    entered: string,
    age: number,
    color: string
}
export const OrderCard = ({fullname, status, madeBy, entered, age, color}: props) => {
    return (
        <div className={`w-80 2xl:w-3/12 h-40 lg:h-60 rounded-2xl m-2 p-5 flex flex-col items-center justify-between`} style={{backgroundColor: color, color: 'white'}}>
            <div className={`w-full flex justify-between`}>
                <h5>{fullname}</h5>
                <p>{status}</p>
            </div>
            <div className={`w-full flex flex-col justify-start items-start`}>
                <p>Составил: {madeBy}</p>
                <p>Зашел: {entered}</p>
                <p>Лет: {age}</p>
            </div>
        </div>
    );
};
