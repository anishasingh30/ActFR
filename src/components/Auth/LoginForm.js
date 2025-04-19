// src/pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../services/authService';
import '../../styles/LoginForm.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Submit form: after successful login, redirect to home page
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await loginUser(credentials);
      // Save token and user data in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      // Redirect to home page
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      {/* Left Column (Form) */}
      <div className="login-left">
        <div className="login-header">
          <h1 className="logo">ActAware</h1>
          <h2>Welcome Back!</h2>
          <p>Please enter your login details below</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={credentials.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          {error && <p className="error">{error}</p>}

          <button type="submit" className="sign-in-btn" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          <div className="separator">
            <span>Or continue with</span>
          </div>

          <button type="button" className="google-btn">
            <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" alt="Google Icon" />
            Log in with Google
          </button>

          <div className="signup-link">
            <p>Don’t have an account? <Link to="/register">Sign Up</Link></p>
          </div>
        </form>
      </div>

      {/* Right Column (Illustration) */}
      <div className="login-right">
        <div className="illustration-text">
          {/* Add your illustration or text here */}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
