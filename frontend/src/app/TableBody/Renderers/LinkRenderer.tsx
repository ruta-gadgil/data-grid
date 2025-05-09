import { CellRendererProps } from "../../stores/pluginsStore";

interface LinkRendererProps extends Omit<CellRendererProps, 'value'> {
    value: string;
}
export default function LinkRenderer({ value}: LinkRendererProps) {
    const handleClick = () => {
        console.error('Cannot update links at this moment')
    }
    return <td onClick={handleClick}><a href={value}>{value}</a></td>;
}