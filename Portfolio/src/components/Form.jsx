import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("xeqyynwg");
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSuccess() {
    setIsSubmitted(true);
  }

  if (state.succeeded && isSubmitted) {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  }
  return (
    <form className="footer-form" onSubmit={handleSubmit}>
      <input type="text" name="name" id="name" placeholder="Name" required />
      <ValidationError prefix="Name" field="text" errors={state.errors} />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Message"
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} onClick={handleSuccess}>
        Submit
      </button>
      {state.succeeded && isSubmitted && (
        <p className="success-message">Thank you for your message!</p>
      )}
    </form>
  );
}

export default Form;
