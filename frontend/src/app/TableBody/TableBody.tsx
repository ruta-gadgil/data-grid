import { ColumnTypes } from "../../interfaces/interfaces";
import Cell from "./Cell";

interface TableBodyProps {
    rowData: [];
    columnTypeMap: {[key: string]: ColumnTypes}
}

export default function TableBody ({rowData, columnTypeMap}: TableBodyProps) {
    const updateCell = (rowId: number, colId: number, newValue: any) => {
        console.log('TableBody: updating cell at', rowId, colId);
        console.log('TableBody:updateCell: newValue', newValue)
    }
    return (
    <tbody>
        {rowData.map((entry, rowId) => {
        return <tr key={rowId} >{Object.keys(entry).map((key, colId) => {
            const columnType = columnTypeMap[key];
            const value = entry[key];
            console.log(value)
            return (
            <Cell 
            rowId={rowId} 
            row={entry} 
            colId={colId} 
            value={value} 
            columnType={columnType} 
            onChange={updateCell} />  )
        })}</tr>
    })}
    </tbody>
)};