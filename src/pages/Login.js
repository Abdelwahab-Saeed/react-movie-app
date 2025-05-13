import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (value) => {
    if (!value) return 'Please enter an email address.';
    if (!emailRegex.test(value)) return 'Please enter a valid email address.';
    return '';
  };

  const validatePassword = (value) => {
    if (!value) return 'Please enter a password.';
    if (value.length < 8) return 'Password must be at least 8 characters long.';
    return '';
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    setErrors({
      email: emailError,
      password: passwordError
    });

    if (!emailError && !passwordError) {
      alert('Form submitted!');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="w-50 shadow p-5" onSubmit={handleSubmit}>
        <h1 className="text-center mb-4">Login</h1>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>
        <div className="text-center mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
