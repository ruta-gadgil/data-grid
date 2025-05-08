import { CellRendererProps } from '../../stores/pluginsStore';
import styles from './Tag.module.scss';

interface TagRendererProps extends Omit<CellRendererProps, 'value'> {
    value: string;
}
export default function TagRenderer ({value, onStartEdit}: TagRendererProps) {
    return <td className={styles.tag} onClick={onStartEdit}>{value}</td>;
}