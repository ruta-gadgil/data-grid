import { CellEditorProps } from "../../pluginsStore";

export default function TagEditor({value, onChange, onClose, onSubmit, colId, columnType, rowId}: CellEditorProps) {
    return <td><input value={value}></input></td>;
}