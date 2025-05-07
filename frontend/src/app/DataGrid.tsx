import { useEffect, useState } from "react";
import { ColumnTypes, Table, User } from "../interfaces/interfaces";
import styles from './DataGrid.module.scss';
import { fetchTableData, fetchUsers } from "./apiClient";
import TableBody from "./TableBody/TableBody";
import TableHeader from "./TableHeader/TableHeader";
import { initializePlugins } from "./stores/initPlugins";
import { useGridStore } from "./stores/gridStore";

export default function DataGrid() {
    // const [tableData, setTableData] = useState<Table|null>(null);
    // const [columnTypeMap, setColumnTypeMap] = useState<{[key: string]: ColumnTypes}|null>(null)
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    const { data, columns, setColumns, setColumnTypeMap, setData } = useGridStore();
      
    useEffect(() => {
      
        const loadData = async () => {
          try {
            const [tableData, usersData] = await Promise.all([
              fetchTableData(),
              fetchUsers(),
            ]);
            setData(tableData.rowData);
            setColumns(tableData.columns);
            const myMap: {[key: string]: ColumnTypes} = {}
            tableData.columns.forEach((entry) => {
                myMap[entry.name] = entry.type;
            });
            setColumnTypeMap(myMap);

            setUsers(usersData);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };
        initializePlugins();
        loadData();
      }, [setColumns,setColumnTypeMap, setData]);

      if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data  && 
        <table className={styles.dataGridTable}>
            <TableHeader/>
            <TableBody />
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