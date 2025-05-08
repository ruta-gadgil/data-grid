import { useOutsideClick } from "../../customHooks/useComponentVisible";
import { CellEditorProps } from "../../stores/pluginsStore";

export default function TagEditor({value, onChange, onSubmit}: CellEditorProps) {
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
    </td>
    );
}