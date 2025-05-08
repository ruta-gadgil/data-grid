import { useEffect, useState } from "react";
import { User } from "../interfaces/interfaces";
import styles from './DataGrid.module.scss';
import { fetchTableData, fetchUsers } from "./apiClient";
import TableBody from "./TableBody/TableBody";
import TableHeader from "./TableHeader/TableHeader";
import { initializePlugins } from "./stores/initPlugins";
import { useGridStore } from "./stores/gridStore";

export default function DataGrid() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    const { data,  setColumns, setData } = useGridStore();
      
    useEffect(() => {
      
        const loadData = async () => {
          try {
            const [tableData, usersData] = await Promise.all([
              fetchTableData(),
              fetchUsers(),
            ]);
            setData(tableData.data);
            setColumns(tableData.columns);
            setUsers(usersData);
            
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setLoading(false);
          }
        };
        initializePlugins();
        loadData();
      }, [setColumns, setData]);

      if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data  && 
        <table className={styles.dataGridTable}>
            <TableHeader/>
            <TableBody />
        </table>
      }
    </div>
  );
};