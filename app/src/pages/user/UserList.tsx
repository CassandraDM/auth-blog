import { useState } from "react";
import { UserType } from "../../types/user.type";
import { findAll } from "../../services/user.service";

const UserList = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const fetchUsers = async () => {
    try {
      const users = await findAll();
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      {/* users list */}
      <div>
        <button onClick={fetchUsers}>Fetch Users</button>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.username} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
