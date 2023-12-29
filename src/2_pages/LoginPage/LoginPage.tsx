import {LoginForm} from "@/3_widgets/LoginForm/LoginForm.tsx";

export const LoginPage = () => {
    return (
        <div className={`h-screen flex`}>
            <LoginForm/>
            <img className={`hidden lg:block w-1/2 h-screen object-cover`} src={'/images/login.png'}/>
        </div>
    );
};
