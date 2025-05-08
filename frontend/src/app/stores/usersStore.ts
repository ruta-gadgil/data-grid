import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { User } from '../../interfaces/interfaces';
import { fetchUsers } from '../apiClient';

export interface UsersState {
    users: User[];
    isLoading: boolean;
    error: string | null;
    selectedUsers: {[key: string]: User[]}
    fetchUsers: () => Promise<void>;
}

export const useUsersStore = create<UsersState>()(
    immer((set, get) => ({
    users: [],
    isLoading: false,
    error: null,
    selectedUsers: {},

    fetchUsers: async () => {
        set({ isLoading: true, error: null });
        try {
            const data = await fetchUsers();
            set({ users: data, isLoading: false });
        } catch (error) {
            set({ 
                error: (error instanceof Error) ? 
                `Unable to fetch users: ${error.message}` : 
                'Unknown error occurred while fetching users', 
                isLoading: false 
          });
        }
      },
    }),
));
