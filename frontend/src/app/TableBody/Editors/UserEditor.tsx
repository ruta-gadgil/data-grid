import { CellEditorProps } from "../../stores/pluginsStore";
import { useOutsideClick } from "../../customHooks/useComponentVisible";
import { useEffect, useState } from "react";
import { User } from "../../../interfaces/interfaces";
import { useUsersStore } from "../../stores/usersStore";
import styles from './Editor.module.scss';

interface UserEditorProps extends Omit<CellEditorProps, 'value' | 'onChange'> {
    value: User[];
    onChange: (value: User[]) => void;
}
export default function UserEditor({value, onChange, onClose}: UserEditorProps) {
    const { users, isLoading, error, fetchUsers } = useUsersStore();
    const [selectedUsers, setSelectedUsers] = useState<User[]>(value);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);
      
    const toggleUser = (user: User) => {
        const isSelected = selectedUsers.some(u => u.id === user.id);
        
        if (isSelected) {
            setSelectedUsers(selectedUsers.filter(u => u.id !== user.id));
        } else {
            setSelectedUsers([...selectedUsers, user]);
        }
    };
      
    const handleSave = () => {
        onChange(selectedUsers);
        onClose();
    };
    

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const ref = useOutsideClick(() => {
        onClose();
    });

    return (
    <td>
        <div ref={ref} className={styles.userEditorContainer}>
            <div>
                <input
                className={styles.userSearchInput}
                type="text"
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                />
            </div>
            { /* Loading */ }
            {isLoading && (
                <div>Loading users...</div>
            )}
            { /* Error */ }
            {error && (
                <div>{error}</div>
            )}
      
            <div className={styles.selectedUsers}>
                <span>Assigned Users</span>
                {selectedUsers.map(user => (
                    <div className={styles.selectedUser} key={user.id}>
                        <span>{user.name}</span>
                        <button className={styles.btnDeleteSelected} onClick={() => toggleUser(user)}>×</button>
                    </div>
                ))}
            </div>
      
            <div className={styles.filteredUsers}>
            <span>Add assignees...</span>
            {filteredUsers.length > 0 ? (
                filteredUsers.map(user => {
                    // don't include users that are already slelected
                    // optimization to do: will likely be ideal/optimal to include a separate list of available users to render
                    if(!selectedUsers.find((u) => u.id === user.id)) {
                        return (    
                            <div className={styles.filteredUser} key={user.id} onClick={() => toggleUser(user)}>
                                <span>{user.name}</span>
                            </div>
                        )
                    } else {
                        return null;
                    }
                    })
                    ) : (
                    <div>No users found</div>
                )}
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.btnCancel} onClick={onClose}>Cancel</button>
                <button className={styles.btnSave} onClick={handleSave}>Save</button>
            </div>
        </div>
    </td>);
}