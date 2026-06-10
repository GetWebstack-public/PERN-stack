import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { register as registerApi } from '../../api/auth';
import { useAuth } from '../../context/AuthContext';
import useForm from '../../hooks/useForm';
import './auth.css';

export default function RegisterPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { values, error, setError, loading, setLoading, handleChange } = useForm({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const { data } = await registerApi(values);
      login(data.token, data.user);
      navigate('/');
    } catch (err) {
      const data = err.response?.data;
      setError(data?.errors?.[0]?.msg || data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card card">
        <div className="auth-header">
          <div className="auth-logo-dot" />
          <h1 className="auth-title">Create account</h1>
          <p className="auth-subtitle">Get started for free</p>
        </div>

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label>Full name</label>
            <input className="form-control" name="name" type="text" placeholder="Jane Doe" value={values.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" name="email" type="email" placeholder="you@example.com" value={values.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Password <span style={{fontWeight:400,textTransform:'none',letterSpacing:0}}>(min 6 chars)</span></label>
            <input className="form-control" name="password" type="password" placeholder="••••••••" value={values.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
            {loading ? 'Creating account…' : 'Create account'}
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
