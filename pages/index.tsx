import { useEffect, useState } from "react";
import NewsletterSignupForm from "../components/NewsletterSignupForm";
import UsersList from "../components/UsersList";

export default function IndexPage() {
  const [showNewsletterWidget, setShowNewsletterWidget] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNewsletterWidget(true);
    }, 10000);
    return () => clearTimeout(timer);
  })

  return (
    <>
      { !showPosts && <UsersList />}

      {showNewsletterWidget && (
        <div>
          <h2>Join Our Newletter</h2>
          <NewsletterSignupForm />
        </div>
      )}
    </>
  );
}

