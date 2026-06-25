import { useState } from "react";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/register",
        {
          email,
          password,
        },
      );

      console.log(data);

      localStorage.setItem("token", data.token);

      alert("Registration Successful");
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>

      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
