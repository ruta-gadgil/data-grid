import { CellEditorProps } from "../../pluginsStore";

export default function LinkEditor({value, onChange, onClose, onSubmit, colId, columnType, rowId}: CellEditorProps) {
    return <td><input value={value}></input></td>;
}