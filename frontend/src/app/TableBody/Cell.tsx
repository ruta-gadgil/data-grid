import { memo, useState } from "react";

import { usePluginsStore } from "../stores/pluginsStore";

interface CellProps {
    rowId: number;
    colId: number;
    value: string | number;
    columnType: string;
    onChange: (rowId: number, colId: number, newValue: string | number) => void;
    onSave: (rowId: number, colId: number, newValue: string | number) => void;
}
const Cell: React.FC<CellProps> = memo(({rowId, colId, value, columnType, onChange, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const { getCellRenderer, getCellEditor } = usePluginsStore();

    // Get the appropriate renderer and editor based on column type
    const CellRenderer = getCellRenderer(columnType) ;
    const CellEditor = getCellEditor(columnType) ;
    
    const handleStartEdit = () => {
        setIsEditing(true);
    }

    const handleCloseEdit = () => {
        setIsEditing(false);
    }

    const handleChange = (newValue: string | number) => {
        onChange(rowId, colId, newValue)
    }

    const handleSubmit = () => {
        onSave(rowId, colId, value);
        handleCloseEdit();
    }
 
    return (
            isEditing ?
            <CellEditor
            value={value}
            onChange={handleChange}
            onClose={handleCloseEdit} 
            onSubmit={handleSubmit} /> 
            : <CellRenderer
            value={value} 
            columnType={columnType} 
            isEditing={isEditing} 
            onStartEdit={handleStartEdit} />
    );
});

export default Cell;