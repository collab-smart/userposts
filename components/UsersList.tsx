import { useEffect, useState } from "react";
import User from "./User";
import styles from "./UsersList.module.css";

export default function UsersList({
  setUserId,
  setUserPosts,
  setShowUserPosts,
}) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      setUsers(users);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.UsersList}>
      <h1>Users</h1>
      <div>
        {users.map((u) => (
          <User
            key={u.id}
            {...u}
            setUserId={setUserId}
            setUserPosts={setUserPosts}
            setShowUserPosts={setShowUserPosts}
          />
        ))}
      </div>
    </div>
  );
}
