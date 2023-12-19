
export const ButtonAddItem = () => {
    return (
        <div className={`flex items-center`}>
            <button className={`w-9 h-9 flex items-center justify-center text-white font-bold rounded-full`} style={{ backgroundColor: '#1FD680' }}>+</button>
            <p className={`pl-3`}>Создать заказ</p>
        </div>
    );
};
