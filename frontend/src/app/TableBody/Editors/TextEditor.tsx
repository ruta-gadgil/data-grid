import { CellEditorProps } from "../../stores/pluginsStore";
import { useOutsideClick } from "../../customHooks/useComponentVisible";

export default function TextEditor({value, onChange, onSubmit, colId, columnType, rowId}: CellEditorProps) {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            onSubmit();
        }
    }
    const ref = useOutsideClick(() => {
        onSubmit();
      });
    return (
    <td>
        <div ref={ref}>
        <input 
            value={value} 
            onChange={(e) => {
                const newValue = e.target.value;
                onChange(newValue);
            }}
            onKeyDown={handleKeyDown}>    
        </input>
        </div>
    </td>);
}