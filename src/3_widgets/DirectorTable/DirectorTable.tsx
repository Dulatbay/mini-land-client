import {EmployeeRow} from "@/5_entities/report";

interface Props {
    employees: EmployeeRow[]
}

export const DirectorTable = ({employees}: Props) => {
    return (

        <div className={`w-11/12 sm:w-10/12 m-auto pt-20`}>
            <table className={`w-full text-center`}>
                <thead className={`h-10`}>
                <tr>
                    <th className={`border border-black`}>#</th>
                    <th className={`border border-black`}>ФИО работника</th>
                    <th className={`border border-black`}>Заказов на сегодня</th>
                    <th className={`border border-black`}>Прибыль за сегодня</th>
                    <th className={`border border-black`}>Общее время присмотра</th>
                </tr>
                </thead>

                <tbody>
                {
                    employees.map((e, i) =>
                        <tr className={`h-10 ${i % 2 ? "" : "bg-gray-400"}`} key={i}>
                            <td className={`border border-black p-2`}>{i + 1}</td>
                            <td className={`border border-black p-2`}>{e.username}</td>
                            <td className={`border border-black p-2`}>{e.orders_count}</td>
                            <td className={`border border-black p-2`}>{e.profit}</td>
                            <td className={`border border-black p-2`}>{e.serve_time}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
};


// import React, { ReactNode, useState, useEffect } from 'react';
//
// const TableCell: React.FC<{ children: ReactNode }> = ({ children }) => (
//     <td className={`border border-black h-10`}>{children}</td>
// );
//
// const TableHeader: React.FC<{ children: ReactNode }> = ({ children }) => (
//     <th className={`border border-black h-10`}>{children}</th>
// );
//
// const TableRow: React.FC<{ children: ReactNode }> = ({ children }) => (
//     <tr className={`h-10`}>{children}</tr>
// );
//
// export const DirectorTable: React.FC = () => {
//     const [rows, setRows] = useState([{ id: 1, orderData: 'Новый заказ' }]);
//
//     // Функция для обработки заказа и обновления таблицы
//     const handleOrder = () => {
//         const newOrderData = 'Данные нового заказа';
//         setRows((prevRows) => [...prevRows, { id: prevRows.length + 1, orderData: newOrderData }]);
//     };
//
//     useEffect(() => {
//         // Автоматически добавляем строку при загрузке компонента
//         handleOrder();
//     }, []);
//
//     return (
//         <div className={`w-11/12 sm:w-10/12 m-auto pt-20`}>
//             <table className={`min-w-full bg-white text-center border border-black rounded`}>
//                 <thead className={`h-10`}>
//                 <TableRow>
//                     <TableHeader>#</TableHeader>
//                     <TableHeader>ФИО работника</TableHeader>
//                     <TableHeader>Заказов за сегодня</TableHeader>
//                     <TableHeader>Прибыль за сегодня</TableHeader>
//                     <TableHeader>Общее время присмотра</TableHeader>
//                 </TableRow>
//                 </thead>
//
//                 <tbody>
//                 {rows.map((row) => (
//                     <TableRow key={row.id}>
//                         <TableCell>{row.id}</TableCell>
//                         <TableCell>Новое значение 2</TableCell>
//                         <TableCell>{row.orderData}</TableCell>
//                         <TableCell>Новое значение 4</TableCell>
//                         <TableCell>Новое значение 5</TableCell>
//                     </TableRow>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
