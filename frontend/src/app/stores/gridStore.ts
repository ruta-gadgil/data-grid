import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ColumnMetaData } from '../../interfaces/interfaces';

export interface GridState {
    data: (string|number)[][];
    columns: ColumnMetaData[];
    
    // Actions
    setData: (data: string[][]) => void;
    setColumns: (columns: ColumnMetaData[]) => void;
    updateCell: (rowIndex: number, colId: number, value: string | number) => void;
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
      
      // Optional: Trigger side effects like API calls
      saveChangesToServer(rowIndex, colId, value);
    },
  }))
);

// Optional: Save changes to backend
async function saveChangesToServer(rowIndex: number, columnId: number, value: string | number) {
    console.log('saving to the server')
}