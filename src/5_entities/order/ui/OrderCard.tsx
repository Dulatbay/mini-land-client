import {OrderCardModel} from "../model/types.ts";


const getColor = (isFinished: boolean, remainTime: number) => {
    if (isFinished)
        return "#1FD680"
    else if (remainTime >= 0)
        return "#FFA733"
    else if (remainTime < 0)
        return "#FF3333"
}

const getTime = (remainTime: number) => {
    if (remainTime < 0) remainTime *= -1;
    const min = Math.round(remainTime / 60)
    console.log(remainTime, remainTime / 60, min)
    if (min < 0) return Math.round(remainTime) + "c."
    return min + "m."
}


export const OrderCard = (childRecord: OrderCardModel) => {
    return (
        <div className={`w-80 2xl:w-3/12 h-40 lg:h-60 rounded-2xl m-2 p-5 flex flex-col items-center justify-between`}
             style={{backgroundColor: getColor(childRecord.is_finished, childRecord.remain_time), color: 'white'}}>
            <div className={`w-full flex justify-between`}>
                <h5>{childRecord.child_name}</h5>
                <p>
                    {
                        childRecord.remain_time < 0 ? "Прошло: " : "Осталось: "
                    }
                    {
                        getTime(childRecord.remain_time)
                    }
                </p>
            </div>
            <div className={`w-full flex flex-col justify-start items-start`}>
                <p>Родитель: {childRecord.parent_name}</p>
                <p>Зашел: {childRecord.entered_time}</p>
                <p>Возраст ребенка: {childRecord.age}</p>
            </div>
        </div>
    );
};
