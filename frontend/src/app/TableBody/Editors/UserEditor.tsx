import { CellEditorProps } from "../../stores/pluginsStore";
import { useOutsideClick } from "../../customHooks/useComponentVisible";
import { useEffect, useState } from "react";
import { User } from "../../../interfaces/interfaces";
import { useUsersStore } from "../../stores/usersStore";
import styles from './UserEditor.module.scss';

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
        <div ref={ref}>
            <div>
                <input
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
                {selectedUsers.map(user => (
                    <div key={user.id}>
                        {user.name}
                        <button onClick={() => toggleUser(user)}>×</button>
                    </div>
                ))}
            </div>
      
            <div>
            {filteredUsers.length > 0 ? (
                filteredUsers.map(user => {
                    // don't include users that are already slelected
                    // will likely be ideal/optimal to include a separate list of available users to render
                    if(!selectedUsers.find((u) => u.id === user.id)) {
                        return (
                        <div key={user.id} onClick={() => toggleUser(user)}>
                            <img 
                                src={user.avatar} 
                                alt={user.name}
                            />
                            <span>{user.name}</span>
                        </div>)
                    } else {
                        return null;
                    }
                    })
                    ) : (
                    <div>'No users found'</div>
                )}
            </div>
            <div>
                <button onClick={onClose}>Cancel</button>
                <button onClick={handleSave}>Save</button>
            </div>
        </div>
    </td>);
}