import { useOutsideClick } from "../../customHooks/useComponentVisible";
import { CellEditorProps } from "../../stores/pluginsStore";
import styles from './Editor.module.scss';

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
        <div className={styles.numEditorContainer} ref={ref}>
            <input 
            className={styles.editorInput}
            value={value} 
            autoFocus
            onChange={(e) => {
                const newValue = parseInt(e.target.value);
                if (typeof newValue === 'number' && !isNaN(newValue)) {
                    onChange(newValue);
                }
                // future enhancement: add an alert component to show this error
                else {
                    console.error(`${e.target.value}, ' is not a valid number input`)
                }
            }}
            onKeyDown={handleKeyDown}>
            </input>
        </div>
    </td>
    );
}