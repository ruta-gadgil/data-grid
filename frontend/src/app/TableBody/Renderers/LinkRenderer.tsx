import { CellRendererProps } from "../../stores/pluginsStore";

interface LinkRendererProps extends Omit<CellRendererProps, 'value'> {
    value: string;
}
export default function LinkRenderer({ value, onStartEdit}: LinkRendererProps) {
    return <td  onClick={onStartEdit}><a href={value}>{value}</a></td>;
}