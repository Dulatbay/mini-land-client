import {ButtonBack} from "@/6_shared/BaseComponents/ButtonBack/ButtonBack.tsx";
import {useNavigate} from "react-router-dom";
import {CommonInput} from "@/6_shared/BaseComponents/CommonInput/CommonInput.tsx";
import {useState} from "react";
import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {greenBg} from "@/6_shared/lib/colors.ts";

const maxFileName = 20;

const getCorrectFileName = (fileName: string) => {
    if (fileName.length > maxFileName)
        return fileName.substring(0, maxFileName) + "..."
    return fileName
}

export const CreateMasterClassPage = () => {
    const navigate = useNavigate()
    const [selectedFile, setSelectedFile] = useState<string>("Не выбрано");
    return <>
        <ButtonBack clickHandler={() => navigate('/master-classes')}/>
        <div
            className={`w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 mt-10 md:mt-0 p-10 border-2 m-auto rounded-3xl bg-white`}>
            <div className={`w-full pb-3 flex flex-col md:justify-between items-center`}>
                <img src={'/icons/Logo.svg'} className={`w-32 object-contain`} style={{backgroundPosition: "center"}}
                     alt={''}/>
                <p className={`pt-3 text-2xl font-medium`}>Создать мастер класс</p>
            </div>
            <form className={'mt-8 flex flex-col gap-4'}>
                <CommonInput placeholder={"Название"}/>
                <CommonInput placeholder={"Описание"}/>
                <CommonInput placeholder={"Цена"} type={"number"}/>
                <div className="flex flex-row items-center">
                    <input
                        type="file"
                        id="custom-input"
                        onChange={(e) => setSelectedFile(e.target.files![0].name)}
                        hidden
                    />
                    <label
                        htmlFor="custom-input"
                        className="block text-sm mr-4 py-2 px-4
            rounded-md border-0 font-semibold bg-green-50
            text-green-700 hover:bg-green-100 cursor-pointer"
                    >
                        Выберите изображение
                    </label>
                    <label className="text-sm text-slate-500">{getCorrectFileName(selectedFile)}</label>
                </div>
                <div className={`w-full mt-4`}>
                    <Button
                        backgroundColor={greenBg}
                        content={"ОТПРАВИТЬ"}
                        onClick={() => {
                        }}
                    />
                </div>
            </form>
        </div>
    </>
}