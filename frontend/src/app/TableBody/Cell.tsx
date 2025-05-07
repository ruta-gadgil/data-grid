import { memo, useState } from "react";

import { ColumnTypes } from "../../interfaces/interfaces";
import { usePluginsStore } from "../pluginsStore";

interface CellProps {
    rowId: number;
    row: [];
    colId: number;
    value: any;
    columnType: ColumnTypes
    onChange: (rowId: number, colId: number, newValue: any) => void;
}
const Cell: React.FC<CellProps> = memo(({rowId, row, colId, value, columnType, onChange }) => {
    const [isEditing, setIsEditing] = useState(false);
    const { getCellRenderer, getCellEditor } = usePluginsStore();

     // Get the appropriate renderer and editor based on column type
    const CellRenderer = getCellRenderer(columnType) ;
    const CellEditor = getCellEditor(columnType) ;
    
    const handleStartEdit = () => {
        setIsEditing(true);
        console.log('Cell:handleStartEdit: trying to update value')
    }

    const handleCloseEdit = () => {
        setIsEditing(false);
    }

    const handleChange = (newValue: any) => {
        // onchange(newValue);
        console.log('Cell:handleChange: trying to update value, newValue: ', newValue)
        setIsEditing(false);
        onChange(rowId, colId, newValue)
    }
 
    return (isEditing ?
        <CellEditor 
        value={value} 
        colId={colId} 
        columnType={columnType}
        rowId={rowId} 
        onChange={handleChange}
        onClose={handleCloseEdit} 
        onSubmit={() => {handleChange(value)}} /> 
        : <CellRenderer 
        rowId={rowId} 
        colId={colId} 
        columnType={columnType} 
        value={value} 
        isEditing={isEditing} 
        onStartEdit={handleStartEdit} />
    );
});

export default Cell;