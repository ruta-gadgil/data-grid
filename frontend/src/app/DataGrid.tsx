import { useEffect, useState } from "react";
import { ColumnType, ColumnTypes, Table, User } from "../interfaces/interfaces";
import './app.module.scss'
import { fetchTableData, fetchUsers } from "./apiClient";

export default function DataGrid() {
    const [tableData, setTableData] = useState<Table|null>(null);
    const [columnTypeMap, setColumnTypeMap] = useState<{[key: string]: ColumnTypes}|null>(null)
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
          try {
            const [tableData, usersData] = await Promise.all([
              fetchTableData(),
              fetchUsers(),
            ]);
            setTableData(tableData);
            setUsers(usersData);
            const myMap: {[key: string]: ColumnTypes} = {}
            tableData.columns.forEach((entry) => {
                myMap[entry.name] = entry.type;
            });
            setColumnTypeMap(myMap)
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };

        loadData();
      }, []);

      if (loading) return <div>Loading...</div>;

      const renderTableHeader = (tableColumns: ColumnType[]) => {
        return <thead><tr>{tableColumns.map((entry, headerId) => {
            return <th key={headerId}>{entry.name}</th>
        })}</tr></thead>
      }


  return (
    <div className="data-grid">
      {tableData && columnTypeMap && 
      <table>
        {renderTableHeader(tableData.columns)}
        <tbody>{tableData.rowData.map((entry, rowId) => {
            return <tr key={rowId}>{Object.keys(entry).map((key, id) => {
                console.log(key, columnTypeMap[key])
                let additionalClassNames;
                switch(columnTypeMap[key]) {
                    case ColumnTypes.Link:
                        additionalClassNames = 'link';
                        return <td key={id} className={additionalClassNames}><a href={entry[key]}>{entry[key]}</a></td>;
                    case ColumnTypes.Tag:
                        additionalClassNames = 'tag';
                        return <td key={id} className={additionalClassNames}>{entry[key]}</td>;
                    case ColumnTypes.Num:
                        additionalClassNames = 'num';
                        return <td key={id} className={additionalClassNames}>{entry[key]}</td>;
                    case ColumnTypes.Str:
                        additionalClassNames = 'str';
                        return <td key={id} className={additionalClassNames}>{entry[key]}</td>;
                    default:
                        console.log('Error in column type');
                        return <td key={id}>Error displaying data</td>
                }
                
                
            })}</tr>
        })}</tbody>
      </table>
      }
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};