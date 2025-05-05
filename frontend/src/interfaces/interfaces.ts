export enum ColumnTypes {
    Tag = 'tag',
    Link = 'link',
    Num = 'num',
    Str = 'str',
}
export interface ColumnType {
    name: string,
    type: ColumnTypes
}

export interface Table {
    columns: ColumnType[],
    rowData: []
}

export interface User {
    id: number;
    name: string;
    email: string;
}