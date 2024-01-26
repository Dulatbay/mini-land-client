import {Button} from "@/6_shared/BaseComponents/Button/Button.tsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCreateSaleMutation} from "@/5_entities/sale";
const inputStyle = "w-full 2xl:m-0 m-1 p-3 rounded-lg ";

const CreateSaleForm = () => {
    const [fullTime, setFullTime] = useState(0)
    const [fullPrice, setFullPrice] = useState(0)
    const [title, setTitle] = useState("")
    const navigate = useNavigate()

    const [createSale] = useCreateSaleMutation()

    const createButtonClickHandler = () => {
        const request = {
            full_time: fullTime * 60,
            full_price: fullPrice,
            title: title
        }
        createSale(request).finally(() => {
            setTimeout(() => {
                window.location.reload()
            }, 50)
            navigate('/sales')
        })
    }
    return (
        <form
            className={`w-5/6 md:w-4/6 lg:w-3/6 2xl:w-2/6 mt-10 md:mt-0 p-10 border-8 m-auto rounded-3xl bg-gray-700`}>
            <div className={`w-full md:w-9/12 pb-3 flex flex-col md:flex-row md:justify-between items-center`}>
                <img src={'/icons/Logo.svg'} className={`w-32 object-contain`} style={{backgroundPosition: "center"}}
                     alt={''}/>
                <p className={`text-white pt-3`}>Создать цену</p>
            </div>
            <div className={'mt-10 mb-10 flex flex-col gap-4'}>
                <input className={inputStyle} placeholder={"Как назовете акцию"}
                       onChange={event => setTitle(event.target.value)}
                ></input>
                <input className={inputStyle} placeholder={"Сколько минут хотите добавить?"}
                       type={'number'}
                       onChange={event => setFullTime(+event.target.value)}
                ></input>
                <input className={inputStyle} placeholder={"Сколько это будет стоить?"}
                       type={'number'}
                       onChange={event => setFullPrice(+event.target.value)}
                ></input>
            </div>
            <div className={`w-full sm:flex justify-between gap-20`}>
                <Button content={"ОЧИСТИТЬ"} backgroundColor={"bg-red-500"}/>
                <Button
                    backgroundColor={"bg-purple-700"}
                    content={"ОТПРАВИТЬ"}
                    onClick={createButtonClickHandler}
                />
            </div>
        </form>
    );
};

export default CreateSaleForm;