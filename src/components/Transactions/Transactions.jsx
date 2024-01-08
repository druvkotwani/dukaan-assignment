import React from 'react'
import { useTable } from "react-table";
import dukanData from '../../utils/MOCK_DATA.json'

const Transaction = () => {
    const data = React.useMemo(() => dukanData, []);
    const columns = React.useMemo(
        () => [
            {
                Header: "Order ID",
                accessor: "order_ID",
            },
            {
                Header: "Order Date",
                accessor: "order_date",
            },
            {
                Header: "Order Amount",
                accessor: "order_amount",
            },
            {
                Header: "Transaction Fees",
                accessor: "transaction_fees",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return (
        <div className="App">
            <div className="container">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup, index) => (
                            <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column, columnIndex) => (
                                    <th key={columnIndex} {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, index) => {
                            prepareRow(row);
                            return (
                                <tr key={index} {...row.getRowProps()}>
                                    {row.cells.map((cell, cellIndex) => (
                                        <td key={cellIndex} {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Transaction;