import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        },
      );

      localStorage.setItem("token", data.token);

      alert("Login Successful");
    } catch (error) {
      console.log(error.response.data);
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>

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

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
