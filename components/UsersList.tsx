import { useEffect, useState } from "react";
import User from "./User";
import styles from "./UsersList.module.css";

export default function UsersList() {
  
  const initialUsers = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
  ];

  const [users, setUsers] = useState(initialUsers);

  useEffect(() => {
    const fetchData = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await res.json();
      setUsers(users);
    }
    fetchData()
  },[])

  return (
    <div className={styles.UsersList}>
      <h1>Users</h1>
      <div>
        {users.map((u) => (
          <User key={u.id} {...u} />
        ))}
      </div>
    </div>
  );
}
