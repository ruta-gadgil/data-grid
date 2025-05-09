import { useState } from "react";
import { User } from "../../../interfaces/interfaces";
import { CellRendererProps } from "../../stores/pluginsStore";
import styles from './UserRenderer.module.scss';

interface UserRendererProps extends Omit<CellRendererProps, 'value'> {
    value: User[];
}
export default function UserRenderer({value, onStartEdit}: UserRendererProps) {
    const users = value || [];
    const USER_COUNT = 2;
    const visibleUsers = users.slice(0, USER_COUNT);
    const hiddenUsers = users.slice(USER_COUNT);
    const [isHiddenUsersVisible, setIsHiddenUsersVisible] = useState(false);

    // optimization to do: add debouncing here
    const handleOnMouseEnter = () => setIsHiddenUsersVisible(true);
    const handleOnMouseLeave = () => setIsHiddenUsersVisible(false);

    return (
        <td onClick={onStartEdit}>
            {users.length > 0 ? (
                <div className={styles.userContainer}>
                    <ul className={styles.visibleUsers}>
                        {visibleUsers.map((user) => (
                            <li className={styles.userDetails} key={user.id}>
                                <img className={styles.userAvatar} src={user.avatar} alt={user.name} />
                                <p className={styles.userName}>{user.name}</p>
                            </li>
                        ))}
                    </ul>
                    <div>
                        {hiddenUsers.length > 0 ? (
                            <div className={styles.hiddenUserCount} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                                {`+ ${hiddenUsers.length}`}
                            </div>
                            ) : null}
                        {isHiddenUsersVisible ? 
                        <div>
                            <ul className={styles.hiddenUsers}>
                            {hiddenUsers.map((user) => (
                                <li className={styles.userDetails} key={user.id}>
                                    <span className={styles.userName}>{user.name}</span>
                                </li>
                            ))}
                            </ul>
                        </div> : null}
                    </div>
                </div>
            ) : (<div>No Users assigned</div>)
            }
        </td>
    );
};