import { useEffect, useState } from "react";
import NewsletterSignupForm from "../components/NewsletterSignupForm";
import PostForm from "../components/PostForm";
import PostsList from "../components/PostsList";
import UsersList from "../components/UsersList";

export default function IndexPage() {
  const [showNewsletterWidget, setShowNewsletterWidget] = useState(false);
  const [showUserPosts, setShowUserPosts] = useState(false);
  const [userPosts, setUserPosts] = useState([]);
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletterWidget(true);
    }, 10000);
    return () => clearTimeout(timer);
  });

  if (showUserPosts) {
    if (userPosts) {
      return (
        <>
          <div>
            <h2>UserPosts</h2>
            <PostsList posts={userPosts} />
            <PostForm
              userId={userId}
              posts={userPosts}
              setUserPosts={setUserPosts}
            />
          </div>
        </>
      );
    } else {
      return (
        <>
          <div>No Posts</div>
        </>
      );
    }
  } else {
    return (
      <>
        <UsersList
          setUserId={setUserId}
          setUserPosts={setUserPosts}
          setShowUserPosts={setShowUserPosts}
        />

        {showNewsletterWidget && (
          <div>
            <h2>Join Our Newletter</h2>
            <NewsletterSignupForm />
          </div>
        )}
      </>
    );
  }
}
