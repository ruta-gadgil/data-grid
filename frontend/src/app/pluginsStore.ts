import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { ColumnTypes } from '../interfaces/interfaces';

// Define the types for our cell renderers and editors
export interface CellRendererProps {
  value: any;
  rowId: number;
  colId: number;
//   row: Record<string, any>;
//   column: Column;
//   rowIndex: number;
  isEditing: boolean;
  onStartEdit: () => void;
}

export interface CellEditorProps {
  value: any;
  onChange: (value: any) => void;
  onClose: () => void;
  onSubmit: () => void;
  colId: number;
  columnType: ColumnTypes;
  rowId: number;
//   column: Column;
//   row: Record<string, any>;
//   rowIndex: number;
}

export type CellRenderer = React.FC<CellRendererProps>;
export type CellEditor = React.FC<CellEditorProps>;

// The store interface
interface PluginsState {
  // Storage for registered renderers and editors
  cellRenderers: Record<string, CellRenderer>;
  cellEditors: Record<string, CellEditor>;
  
  // Actions
  registerCellRenderer: (type: string, renderer: CellRenderer) => void;
  registerCellEditor: (type: string, editor: CellEditor) => void;
  unregisterCellRenderer: (type: string) => void;
  unregisterCellEditor: (type: string) => void;
  getCellRenderer: (type: string) => CellRenderer | undefined;
  getCellEditor: (type: string) => CellEditor | undefined;
}

// Create the store with immer for immutable updates
export const usePluginsStore = create<PluginsState>()(
  immer((set, get) => ({
    cellRenderers: {},
    cellEditors: {},
    
    registerCellRenderer: (type, renderer) => {
      set(state => {
        state.cellRenderers[type] = renderer;
      });
      console.log(`Registered cell renderer for type: ${type}`);
    },
    
    registerCellEditor: (type, editor) => {
      set(state => {
        state.cellEditors[type] = editor;
      });
      console.log(`Registered cell editor for type: ${type}`);
    },
    
    unregisterCellRenderer: (type) => {
      set(state => {
        delete state.cellRenderers[type];
      });
      console.log(`Unregistered cell renderer for type: ${type}`);
    },
    
    unregisterCellEditor: (type) => {
      set(state => {
        delete state.cellEditors[type];
      });
      console.log(`Unregistered cell editor for type: ${type}`);
    },
    
    getCellRenderer: (type) => {
      return get().cellRenderers[type];
    },
    
    getCellEditor: (type) => {
      return get().cellEditors[type];
    },
  }))
);