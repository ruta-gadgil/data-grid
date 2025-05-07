import { memo, useState } from "react";

import { usePluginsStore } from "../stores/pluginsStore";

interface CellProps {
    rowId: number;
    colId: number;
    value: string | number;
    columnType: string;
    onChange: (rowId: number, colId: number, newValue: string | number) => void;
}
const Cell: React.FC<CellProps> = memo(({rowId, colId, value, columnType, onChange }) => {
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

    const handleChange = (newValue: string | number) => {
        console.log('Cell:handleChange: trying to update value, newValue: ', newValue)
        onChange(rowId, colId, newValue)
    }
 
    console.log('isEditing:', isEditing)
    return (isEditing ?
        <CellEditor 
        rowId={rowId}
        colId={colId} 
        value={value}
        columnType={columnType} 
        onChange={handleChange}
        onClose={handleCloseEdit} 
        onSubmit={() => {handleChange(value)}} /> 
        : <CellRenderer 
        rowId={rowId} 
        colId={colId} 
        value={value} 
        columnType={columnType} 
        isEditing={isEditing} 
        onStartEdit={handleStartEdit} />
    );
});

export default Cell;