import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findAll } from "../../services/user.service";
import { UserType } from "../../types/user.type";

const UserListPage = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const result = await findAll();
      setUsers(result);
    };
    fetchUsers();
  }, []);

  const handleUserClick = (id: string) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-5">User List</h1>
      <div className="bg-white rounded-lg shadow-md p-5">
        <ul className="list-none p-0">
          {users.map((user) => (
            <li
              key={user.id}
              className="cursor-pointer text-blue-500 hover:underline mb-2"
              onClick={() => handleUserClick(user.id.toString())}
            >
              {user.username}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserListPage;
