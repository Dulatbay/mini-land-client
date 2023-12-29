export const OrderCount = () => {
    return (
        <div className={`m-auto flex flex-col justify-center items-center pt-10`}>
            <div className={`w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center text-[32px] sm:text-[50px] text-white rounded-full bg-[#1FD680]`}>
                15
            </div>
            <p className={`text-[20px] sm:text-[24px]`}>
                Заказы на сегодня
            </p>
        </div>
    );
};
