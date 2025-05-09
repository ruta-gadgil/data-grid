import { CellEditorProps } from "../../stores/pluginsStore";
import { useOutsideClick } from "../../customHooks/useComponentVisible";
import styles from './Editor.module.scss';

interface TextEditorProps extends Omit<CellEditorProps, 'value' | 'onChange'> {
    value: string;
    onChange: (value: string) => void;
}
export default function TextEditor({value, onChange, onSubmit}: TextEditorProps) {
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
        <div className={styles.textEditorContainer} ref={ref}>
        <input
            className={styles.editorInput} 
            value={value} 
            autoFocus
            onChange={(e) => {
                const newValue = e.target.value;
                onChange(newValue.toString());
            }}
            onKeyDown={handleKeyDown}>    
        </input>
        </div>
    </td>);
}