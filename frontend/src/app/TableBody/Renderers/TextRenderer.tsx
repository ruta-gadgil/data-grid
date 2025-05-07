import { CellRendererProps } from "../../pluginsStore";

export default function TextRenderer ({rowId, colId, value,onStartEdit}: CellRendererProps) {
    return <td key={colId} onClick={onStartEdit}>{value}</td>;
}