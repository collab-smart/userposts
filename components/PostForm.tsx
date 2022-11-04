import React, { useState } from "react";
import styles from "./PostForm.module.css";
import createNewPost from "../utils/createNewPost";

export default function PostForm({ userId, posts, setUserPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e, { title, body, userId, posts, setUserPosts }) => {
    e.currentTarget.disabled = true;
    createNewPost(title, body, userId, posts, setUserPosts);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={styles.FormControl}>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          placeholder="Enter Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </div>
      <div className={styles.FormControl}>
        <label htmlFor="body">Body</label>
        <textarea
          name="Body"
          placeholder="Enter Body"
          onChange={(e) => setBody(e.target.value)}
          value={body}
          required
        />
      </div>
      <button
        type="submit"
        onClick={(e) =>
          handleSubmit(e, { title, body, userId, posts, setUserPosts })
        }
      >
        Submit
      </button>
    </form>
  );
}
