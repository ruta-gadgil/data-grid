import { CellRendererProps } from "../../stores/pluginsStore";

interface TextRendererProps extends Omit<CellRendererProps, 'value'> {
    value: string;
}
export default function TextRenderer ({ value, onStartEdit}: TextRendererProps) {
    return (
    <td onClick={onStartEdit}>
        {value}
    </td>);
}