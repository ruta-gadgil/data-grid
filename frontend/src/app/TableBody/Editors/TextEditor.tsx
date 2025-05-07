import { CellEditorProps } from "../../pluginsStore";

export default function TextEditor({value, onChange, onSubmit, colId, columnType, rowId}: CellEditorProps) {
    return <td><input value={value} 
    onChange={(e) => {
        const newValue = e.target.value;
        console.log('TextEditor: editing value, newValue:', newValue)
        onChange(newValue);
    }}
></input></td>;
}