import { CellRendererProps } from '../../stores/pluginsStore';
import styles from './TagRenderer.module.scss';

interface TagRendererProps extends Omit<CellRendererProps, 'value'> {
    value: string;
}
export default function TagRenderer ({value}: TagRendererProps) {
    const handleClick = () => {
        console.error('Cannot update tags at this moment')
    }
    return <td onClick={handleClick}><div className={styles.tag}>{value}</div></td>;
}