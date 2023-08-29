import React, { useState } from 'react';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }

        // Here, you can implement your actual login logic
        // For this example, we'll just simulate a successful login
        alert('Login successful');
        setError('');
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
 <button type="submit">Login</button>
                <p>
                    Don't have an account?{' '}
                    <Link to="/signup">Sign Up</Link>
                </p>            </form>
        </div>
    );
};

export default Login;
