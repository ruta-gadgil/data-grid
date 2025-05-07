import { useEffect, useState } from "react";
import { ColumnTypes, Table, User } from "../interfaces/interfaces";
import styles from './DataGrid.module.scss';
import { fetchTableData, fetchUsers } from "./apiClient";
import TableBody from "./TableBody/TableBody";
import TableHeader from "./TableHeader/TableHeader";
import { initializePlugins } from "./initPlugins";

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
        initializePlugins();
        loadData();
      }, []);

      if (loading) return <div>Loading...</div>;

  return (
    <div>
      {tableData && columnTypeMap && 
        <table className={styles.dataGridTable}>
            <TableHeader columns={tableData.columns} />
            <TableBody rowData={tableData.rowData} columnTypeMap={columnTypeMap}></TableBody>
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