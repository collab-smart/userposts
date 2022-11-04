import styles from "./User.module.css";

// type Props = {
//   id: number;
//   name: string;
//   username: string;
//   email: string;
// };

export default function User({
  id,
  name,
  username,
  email,
  setUserId,
  setUserPosts,
  setShowUserPosts,
}) {
  const fetchUserDetails = async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
    const posts = await res.json();
    setUserId(id);
    setUserPosts(posts);
    setShowUserPosts(true);
  };

  return (
    <div className={styles.User} onClick={() => fetchUserDetails(id)}>
      {name} - {username} - {email}
    </div>
  );
}
