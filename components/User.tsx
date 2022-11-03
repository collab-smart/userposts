import styles from "./User.module.css";

type Props = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export default function User(props: Props) {
  return (
    <div className={styles.User}>
      {props.name} - {props.username} - {props.email}
    </div>
  );
}
