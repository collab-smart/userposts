import React, { useState } from "react";
import HeavyButton from "./HeavyButton";

export default function NewsletterSignupForm() {
  const [inputValue, setInputValue] = useState("");

  function onClickSignupButton() {
    console.log("you clicked the sign up button");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="email"
        value={inputValue}
      />
      <HeavyButton onClick={onClickSignupButton}>Submit</HeavyButton>
    </form>
  );
}
