import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { User } from '../../interfaces/interfaces';

export interface CellRendererProps {
    value: string | number | User[];
    columnType: string;
    isEditing: boolean;
    onStartEdit: () => void;
}

export interface CellEditorProps {
    value: string | number | User[];
    onChange: (value: string) => void;
    onClose: () => void;
    onSubmit: () => void;
}

export type CellRenderer = React.FC<CellRendererProps>;
export type CellEditor = React.FC<CellEditorProps>;

interface PluginsState {
    // Storage for registered renderers and editors
    cellRenderers: Record<string, CellRenderer>;
    cellEditors: Record<string, CellEditor>;
    
    // Actions
    registerCellRenderer: (type: string, renderer: CellRenderer) => void;
    registerCellEditor: (type: string, editor: CellEditor) => void;
    unregisterCellRenderer: (type: string) => void;
    unregisterCellEditor: (type: string) => void;
    getCellRenderer: (type: string) => CellRenderer ;
    getCellEditor: (type: string) => CellEditor ;
}

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