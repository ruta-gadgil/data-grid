import { CellRendererProps } from "../../stores/pluginsStore";

export default function NumRenderer ({rowId, colId, value,onStartEdit}: CellRendererProps) {
    // console.log(`NumRenderer:rowID:${rowId}, colId: ${colId}, value: ${value}`);
    return <td key={colId} onClick={onStartEdit}>{value}</td>;
}