interface GenericRendererProps {
    keyId: number;
    value: string | number;
}
export default function GenericRenderer ({keyId, value}: GenericRendererProps) {
    return <td key={keyId}>{value}</td>;
}