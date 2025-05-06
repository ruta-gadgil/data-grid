import { ColumnType } from "../../interfaces/interfaces"

interface TableHeaderProps {
    columns: ColumnType[];
}
export default function TableHeader({columns} : TableHeaderProps) {
    return <thead><tr>{columns.map((entry, headerId) => {
        return <th key={headerId}>{entry.name}</th>
    })}</tr></thead>
}