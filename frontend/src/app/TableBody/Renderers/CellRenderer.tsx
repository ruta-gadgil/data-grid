import { ColumnTypes } from "../../../interfaces/interfaces";
import LinkRenderer from "./LinkRenderer";
import GenericRenderer from "./GenericRenderer";
import TagRenderer from "./TagRenderer";

interface CellRendererProps {
    keyId: number;
    columnType: ColumnTypes;
    value: string;
}

export default function CellRenderer({keyId, columnType, value}: CellRendererProps){
    switch(columnType) {
        case ColumnTypes.Link:
            return <LinkRenderer keyId={keyId} value={value} />
        case ColumnTypes.Tag:
            return <TagRenderer keyId={keyId} value={value} />    
        case ColumnTypes.Num:
            return <GenericRenderer keyId={keyId} value={value} />
        case ColumnTypes.Str:
            return <GenericRenderer keyId={keyId} value={value} />
        default:
            console.log('Error in column type');
            return <td key={keyId}>Error displaying data</td>
    }
}