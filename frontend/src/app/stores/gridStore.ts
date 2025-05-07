import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ColumnType, ColumnTypes } from '../../interfaces/interfaces';

interface GridState {
    data: any[][];
    columns: ColumnType[];
    columnTypeMap: {[key: string]: ColumnTypes}
    
    // Actions
    setData: (data: any[][]) => void;
    setColumns: (columns: ColumnType[]) => void;
    setColumnTypeMap: (columnTypeMap: {[key: string]: ColumnTypes}) => void;
    updateCell: (rowIndex: number, colId: number, value: any) => void;
}

export const useGridStore = create<GridState>()(
    immer((set) => ({
    data: [],
    columns: [],
    columnTypeMap: {},
    setData: (data) => {
        set((state) => {
            state.data = data;
        });
    },

    setColumns: (columns) => {
        set((state) => {
            state.columns = columns;
        })
    },
    
    setColumnTypeMap: (columnTypeMap) => {
        set((state) => {
            state.columnTypeMap = columnTypeMap;
        })
    },

    updateCell: (rowIndex, colId, value) => {
      set(state => {
        if (state.data[rowIndex]) {
          state.data[rowIndex][colId] = value;
        }
      });
      
      // Optional: Trigger side effects like API calls
      saveChangesToServer(rowIndex, colId, value);
    },
  }))
);

// Optional: Save changes to backend
async function saveChangesToServer(rowIndex: number, columnId: number, value: any) {
    console.log('saving to the server')
}