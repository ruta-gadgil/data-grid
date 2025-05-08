import { User } from "../../../interfaces/interfaces";
import { CellRendererProps } from "../../stores/pluginsStore";

interface UserRendererProps extends Omit<CellRendererProps, 'value'> {
    value: User[];
}
export default function UserRenderer({value, onStartEdit}: UserRendererProps) {
    const users = value || [];
    return (
        <td onClick={onStartEdit}>
            {users.length > 0 ? (
            users.map((user) => (
                <div key={user.id}>
                    <img src={user.avatar} alt={user.name} />
                    <p>{user.name}</p>
                </div>
            ))
            ) : (<div>No Users assigned</div>)
            }
        </td>
    );
};