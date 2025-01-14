import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function Register() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/diplomas", { state: { name: nameRef.current.value, email: emailRef.current.value } });
  }

  return (
    <div className="container">
      <h1>Register Your Interest</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={nameRef} required />
        </label>
        <label>
          Email:
          <input type="email" ref={emailRef} required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
