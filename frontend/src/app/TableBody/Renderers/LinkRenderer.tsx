interface LinkRendererProps {
    keyId: number;
    value: string;
}
export default function LinkRenderer({keyId, value}: LinkRendererProps) {
    return <td key={keyId}><a href={value}>{value}</a></td>;
}