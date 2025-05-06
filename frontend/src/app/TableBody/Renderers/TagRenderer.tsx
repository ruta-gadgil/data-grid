import styles from './Tag.module.scss';

interface TagRendererProps {
    keyId: number;
    value: string | number;
}
export default function TagRenderer ({keyId, value}: TagRendererProps) {
    return <td key={keyId} className={styles.tag}>{value}</td>;
}