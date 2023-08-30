import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import { useNavbarContext } from "../context/NavbarContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setShowNavbar } = useNavbarContext();
  setShowNavbar(false);
  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // Here, you can implement your actual login logic
    // For this example, we'll just simulate a successful login
    alert("Login successful");
    setError("");
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <form className="login-form card p-4" onSubmit={handleLogin}>
        <h2 className="mb-4">Login</h2>
        {error && (
          <div className="error-message alert alert-danger mb-3">{error}</div>
        )}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/home">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Link>
        <p className="mt-3">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
