import { ColumnTypes } from "../../interfaces/interfaces";
import CellRenderer from "./Renderers/CellRenderer";

interface TableBodyProps {
    rowData: [];
    columnTypeMap: {[key: string]: ColumnTypes}
}

export default function TableBody ({rowData, columnTypeMap}: TableBodyProps) {
    return (
    <tbody>
        {rowData.map((entry, index) => {
        return <tr key={index} >{Object.keys(entry).map((key, id) => {
            const columnType = columnTypeMap[key];
            const value = entry[key];
             return <CellRenderer keyId={id} columnType={columnType} value={value} />  
        })}</tr>
    })}
    </tbody>
)};