import { CellEditorProps } from "../../stores/pluginsStore";

export default function LinkEditor({value, onChange, onClose, onSubmit}: CellEditorProps) {
    return <td><input value={value}></input></td>;
}