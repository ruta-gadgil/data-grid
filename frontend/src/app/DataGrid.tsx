import { useEffect, useState } from "react";
import styles from './DataGrid.module.scss';
import { fetchTableData } from "./apiClient";
import TableBody from "./TableBody/TableBody";
import TableHeader from "./TableHeader/TableHeader";
import { initializePlugins } from "./stores/initPlugins";
import { useGridStore } from "./stores/gridStore";

export default function DataGrid() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string|null>(null);

    const { data,  setColumns, setData } = useGridStore();
      
    useEffect(() => {
      
        const loadData = async () => {
          try {
            const tableData = await fetchTableData(); 
            setData(tableData.data);
            setColumns(tableData.columns);
          } catch (error: unknown) {
            if (error instanceof Error) {
              setError(error.message);
              console.error('Error fetching data table: ', error);
            }
            else {
              setError(`Unknown error: ${error}`);
              console.error(error)
            }
            
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
      {error && <div>Unable to load the data grid. See console for detailed error message.</div>}
      {data  && 
        <table className={styles.dataGridTable}>
            <TableHeader/>
            <TableBody />
        </table>
      }
    </div>
  );
};