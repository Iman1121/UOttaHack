import React, { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Signing in with:", email, password);
    // Here you would add your sign-in logic, possibly including authentication requests to a backend.
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    console.log("Creating account for:", email, password);
    // Here you would add your account creation logic.
  };

  return (
    <div className="Login">
      <div>LogIn</div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignIn}>Sign In</button>
      <button onClick={handleCreateAccount}>Create Account</button>
    </div>
  );
}

export default Login;
