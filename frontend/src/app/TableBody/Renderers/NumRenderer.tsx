import { CellRendererProps } from "../../stores/pluginsStore";

interface NumRendererProps extends Omit<CellRendererProps, 'value'> {
    value: number;
}
export default function NumRenderer ({value, onStartEdit}: NumRendererProps) {
    return <td onClick={onStartEdit}><div>{value}</div></td>;
}