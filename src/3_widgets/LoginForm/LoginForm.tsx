export const LoginForm = () => {

    return (
        <form className={`w-5/6 sm:w-1/2 lg:w-1/4 p-10 m-auto rounded-3xl bg-[#3D3D3D]`}>
            <img src={'/icons/Logo.svg'} className={`w-44 pb-6 object-contain m-auto`}
                 style={{backgroundPosition: "center"}} alt={''}/>
            <p className={`text-[12px] md:text-[16px] text-center pb-6 text-white`}>Войдите чтобы продолжить</p>
            <input className={`w-full p-4 mb-4 text-[14px] rounded-lg`} placeholder={'Username'}/>
            <input className={`w-full p-4 mb-4 text-[14px] rounded-lg`} placeholder={'Password'}/>
            <button
                className={`w-full p-3 mt-6 mb-8 text-white bg-[#8C61FF] rounded-[5px] shadow-md active:bg-violet-600`}>SEND
            </button>
        </form>
    );
};
