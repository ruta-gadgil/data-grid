import { CellRendererProps } from "../../stores/pluginsStore";

export default function LinkRenderer({colId, value, onStartEdit}: CellRendererProps) {
    return <td key={colId} onClick={onStartEdit}><a href={value}>{value}</a></td>;
}