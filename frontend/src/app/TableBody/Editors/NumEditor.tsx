import { useOutsideClick } from "../../customHooks/useComponentVisible";
import { CellEditorProps } from "../../stores/pluginsStore";

interface NumEditorProps extends Omit<CellEditorProps, 'value' | 'onChange'> {
    value: number;
    onChange: (value: number) => void;
}
export default function NumEditor({value, onChange, onSubmit}: NumEditorProps) {
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
            type="number"
            value={value} 
            onChange={(e) => {
                const newValue = e.target.value;
                console.log('NumEditor: editing value, newValue:', newValue)
                if (typeof newValue === 'number' && !isNaN(newValue)) {
                    onChange(newValue);
                }
            }}
            onKeyDown={handleKeyDown}>
            </input>
        </div>
    </td>
    );
}