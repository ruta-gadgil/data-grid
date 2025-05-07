import { CellRendererProps } from '../../stores/pluginsStore';
import styles from './Tag.module.scss';

export default function TagRenderer ({rowId, colId, value, onStartEdit}: CellRendererProps) {
    // console.log(`TagRenderer:rowID:${rowId}, colId: ${colId}, value: ${value}`);
    return <td key={colId} className={styles.tag} onClick={onStartEdit}>{value}</td>;
}