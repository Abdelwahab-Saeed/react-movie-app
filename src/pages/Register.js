import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let valid = true;
    const newErrors = {
      email: '',
      name: '',
      username: '',
      password: '',
      confirmPassword: ''
    };

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    } else if (/\s/.test(formData.username)) {
      newErrors.username = 'Username cannot contain spaces';
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      valid = false;
    } else if (
      !/[a-z]/.test(formData.password) ||
      !/[A-Z]/.test(formData.password) ||
      !/[0-9]/.test(formData.password) ||
      !/[*@%$#]/.test(formData.password)
    ) {
      newErrors.password = 'Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character (*@%$#)';
      valid = false;
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        email: '',
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header text-center">
              <h2>Register</h2>
            </div>
            <div className="card-body">
              {isSubmitted && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  Registration successful!
                  <button 
                    type="button" 
                    className="btn-close" 
                    aria-label="Close"
                    onClick={() => setIsSubmitted(false)}
                  ></button>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className={`mb-3 ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="text"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className={`mb-3 ${errors.name ? 'has-error' : ''}`}>
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className={`mb-3 ${errors.username ? 'has-error' : ''}`}>
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter username"
                  />
                  {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                  
                </div>

                <div className={`mb-3 ${errors.password ? 'has-error' : ''}`}>
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  
                </div>

                <div className={`mb-3 ${errors.confirmPassword ? 'has-error' : ''}`}>
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                  />
                  {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success btn-lg">
                    Register
                  </button>
                </div>
                <div className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;