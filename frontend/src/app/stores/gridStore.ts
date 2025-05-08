import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ColumnMetaData, User } from '../../interfaces/interfaces';

export interface GridState {
    data: (string|number|User[])[][];
    columns: ColumnMetaData[];
    
    setData: (data: (string|number|User[])[][]) => void;
    setColumns: (columns: ColumnMetaData[]) => void;
    updateCell: (rowIndex: number, colId: number, value: string | number | User[]) => void;
    saveToServer: (rowIndex: number, colId: number, value: string | number | User[]) => void;
}

export const useGridStore = create<GridState>()(
    immer((set) => ({
    data: [],
    columns: [],
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

    updateCell: (rowIndex, colId, value) => {
      set(state => {
        if (state.data[rowIndex]) {
          state.data[rowIndex][colId] = value;
        }
      });
    },

    saveToServer: (rowIndex, colId, value) => {
      set(state => {
        if (state.data[rowIndex]) {
          state.data[rowIndex][colId] = value;
        }
      });
      saveChangesToServer(rowIndex, colId, value);
    },
  }))
);

// Optional: Save changes to backend
async function saveChangesToServer(rowIndex: number, columnId: number, value: string | number | User[]) {
    console.log('saving to the server! To implement a POST request to update the data on the server. updates happening at: ', rowIndex, columnId, value)
}