import {Link, useRouteError} from "react-router-dom";
import {ApiAppError} from "@/6_shared/api/apiHelper.ts";

export const ErrorPage = () => {
    const error = useRouteError() as ApiAppError
    console.log(error.message, error.statusCode, error.title, error.name)
    return <div className="flex items-center justify-center h-screen">
        <div className="w-1/2">
            <div className="flex flex-col items-center">
                <h1 className="font-bold text-3xl text-blue-600 lg:text-6xl">
                    {error.statusCode}
                </h1>

                <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                    <span className="text-red-500">Oops!</span> {" "}
                    {error.statusCode != 404 ? error.message : 'Страница, на которую вы пытаетесь обратиться, не существует.'}
                </h6>

                <p className="mb-4 text-center text-gray-500 md:text-lg">
                    Попробуйте попытку позже
                </p>

                <Link
                    to="/"
                    className="px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700"
                >
                    Go home
                </Link>
            </div>
        </div>
    </div>
}