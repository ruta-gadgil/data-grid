import { useOutsideClick } from "../../customHooks/useComponentVisible";
import { CellEditorProps } from "../../stores/pluginsStore";

export default function NumEditor({value, onChange, onSubmit}: CellEditorProps) {
    console.log('num editor')
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
                console.log('NumEditor: editing value, newValue:', newValue)
                onChange(newValue);
            }}
            onKeyDown={handleKeyDown}>
            </input>
        </div>
    </td>
    );
}