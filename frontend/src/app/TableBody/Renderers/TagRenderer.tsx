import { CellRendererProps } from '../../pluginsStore';
import styles from './Tag.module.scss';

export default function TagRenderer ({colId, value, onStartEdit}: CellRendererProps) {
    return <td key={colId} className={styles.tag} onClick={onStartEdit}>{value}</td>;
}