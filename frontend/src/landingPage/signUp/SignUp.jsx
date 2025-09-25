import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function SignUp() {
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { name, email, password } = formData;

    if (!email || !password || (isSignup && !name)) {
      handleError('All required fields must be filled');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      handleError('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const endpoint = isSignup ? 'signup' : 'login';
    const url = `http://localhost:5002/auth/${endpoint}`;

    const payload = isSignup
      ? formData
      : {
          email: formData.email,
          password: formData.password
        };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      console.log(`[${endpoint.toUpperCase()} RESPONSE]:`, result);

      const { success, message, jwtToken, name: userName, error } = result;

      if (success) {
        handleSuccess(message);

        if (!isSignup) {
          localStorage.setItem('token', jwtToken);
          localStorage.setItem('loggedInUser', userName || formData.name || '');
          setFormData({ name: '', email: '', password: '' });
          setTimeout(() => navigate('/*'), 1000);
        } else {
          setFormData({ name: '', email: '', password: '' });
          setTimeout(() => setIsSignup(false), 1000);
        }
      } else if (error) {
        const details = error?.details?.[0]?.message || message || 'Something went wrong';
        handleError(details);
      } else {
        handleError(message || 'Request failed');
      }
    } catch (err) {
      handleError(err.message || 'Network error');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">{isSignup ? 'Signup' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              autoComplete="name"
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            autoComplete={isSignup ? "new-password" : "current-password"}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mt-3"
          disabled={loading}
        >
          {loading ? (isSignup ? 'Signing up...' : 'Logging in...') : (isSignup ? 'Signup' : 'Login')}
        </button>

        <p className="text-center mt-3">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            onClick={toggleMode}
            className="btn btn-link p-0"
          >
            {isSignup ? 'Login here' : 'Signup here'}
          </button>
        </p>
      </form>

      <ToastContainer />
    </div>
  );
}

export default SignUp;
