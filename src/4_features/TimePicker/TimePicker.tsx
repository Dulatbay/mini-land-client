const availableHours = [
    8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
]

export const TimePicker = () => {
    return <div className="inline-flex text-lg border rounded-md p-1">
        <select className="px-1 outline-none appearance-none bg-transparent">
            {
                availableHours.map((i, j) => <option value={`${j}`}>{i}</option>)
            }
        </select>
        <span className="px-2">:</span>
        <select name="" id="" className="px-1 outline-none appearance-none bg-transparent">
            <option value="30">30</option>
            <option value="00">00</option>
        </select>
    </div>
}