import { CellEditorProps } from "../../stores/pluginsStore";

export default function NumEditor({value, onChange, onSubmit, colId, columnType, rowId}: CellEditorProps) {
    return <td><input value={value} 
    onChange={(e) => {
        const newValue = e.target.value;
        console.log('TextEditor: editing value, newValue:', newValue)
        onChange(newValue);
    }}
></input></td>;
}