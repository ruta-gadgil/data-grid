import { CellRendererProps } from "../../stores/pluginsStore";

export default function LinkRenderer({rowId, colId, value, onStartEdit}: CellRendererProps) {
    // console.log(`LinkRenderer:rowID:${rowId}, colId: ${colId}, value: ${value}`);
    return <td key={colId} onClick={onStartEdit}><a href={value}>{value}</a></td>;
}