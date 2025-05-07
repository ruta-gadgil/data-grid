import { CellRendererProps } from "../../stores/pluginsStore";

export default function TextRenderer ({rowId, colId, value,onStartEdit}: CellRendererProps) {
    // console.log(`TextRenderer:rowID:${rowId}, colId: ${colId}, value: ${value}`);
    return <td key={colId} onClick={onStartEdit}>{value}</td>;
}