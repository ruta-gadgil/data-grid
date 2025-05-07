import { useGridStore } from "../stores/gridStore";

export default function TableHeader() {
    const { columns } = useGridStore();
    return <thead><tr>{columns.map((entry, headerId) => {
        return <th key={headerId}>{entry.name}</th>
    })}</tr></thead>
}