import { useGridStore } from "../stores/gridStore";
import Cell from "./Cell";

export default function TableBody () {

    const { data, columnTypeMap, updateCell } = useGridStore();
    console.log(data);
    const updateValue = (rowId: number, colId: number, newValue: any) => {
        console.log('TableBody: updating cell at', rowId, colId);
        console.log('TableBody:updateCell: newValue', newValue);
        updateCell(rowId, colId, newValue);
    }
    return (
    <tbody>
        {data.map((entry, rowId) => {
        return <tr key={rowId} >{Object.keys(entry).map((key, colId) => {
            const columnType = columnTypeMap[key];
            // console.log(`entry: ${entry}, key: ${key}`)
            // fix type for tables row data
            const value = entry[key];
            // console.log(value)
            return (
            <Cell 
            rowId={rowId} 
            colId={colId} 
            value={value} 
            columnType={columnType} 
            onChange={updateValue} />  )
        })}</tr>
    })}
    </tbody>
)};