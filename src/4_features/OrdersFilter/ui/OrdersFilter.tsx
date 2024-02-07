export const OrdersFilter = () => {
    return (
        <div className={'w-[190px]'}>
            <h3 className="mb-4 font-semibold text-black">Фильтры</h3>
            <ul className="w-48 text-sm font-medium border rounded-lg border-gray-600 text-white">
                <li className="w-full border-b rounded-t-lg border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="only-me-checkbox" type="checkbox" value="ONLY_ME"
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-600 "/>
                        <label htmlFor="only-me-checkbox"
                               className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Только мои заказы</label>
                    </div>
                </li>
                <li className="w-full border-b  border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="finished-checkbox" type="checkbox" value="FINISHED"
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-600 "/>
                        <label htmlFor="finished-checkbox"
                               className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Завершенные</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="inprocess-checkbox" type="checkbox" value="IN_PROCESS"
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-600 "/>
                        <label htmlFor="inprocess-checkbox"
                               className="w-full py-3 ms-2 text-sm font-medium text-gray-900">В процессе</label>
                    </div>
                </li>
                <li className="w-full border-b border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="overdue-checkbox" type="checkbox" value="ONLY_ME"
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-600 "/>
                        <label htmlFor="overdue-checkbox"
                               className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Просроченные</label>
                    </div>
                </li>
                <li className="w-full  border-gray-600">
                    <div className="flex items-center ps-3">
                        <input id="paid-checkbox" type="checkbox" value="ONLY_ME"
                               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-600 "/>
                        <label htmlFor="paid-checkbox"
                               className="w-full py-3 ms-2 text-sm font-medium text-gray-900">Оплаченные</label>
                    </div>
                </li>
            </ul>
        </div>
    );
};
