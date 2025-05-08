import { useGridStore } from "../stores/gridStore";
import Cell from "./Cell";

export default function TableBody () {

    const { data, columns, updateCell, saveToServer } = useGridStore();
    return (
    <tbody>
        {data.map((entry, rowId) => {
            return (
                <tr>
                    {entry.map((value, colId) => {
                        const columnDetails = columns.find(column => column.colId === colId);
                        if(!columnDetails) {
                            console.error('Column details not found for this colId: ', colId);
                            return null;
                        }
                        const columnType = columnDetails.type;
                        return (
                            <Cell 
                            rowId={rowId} 
                            colId={colId} 
                            value={value} 
                            columnType={columnType} 
                            onChange={updateCell}
                            onSave={saveToServer} />  
                        )
                    })}
                </tr>
            )}
        )}
    </tbody>
)};