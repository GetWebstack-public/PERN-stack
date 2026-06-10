import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="navbar-brand-dot" />
          PERN<span className="navbar-brand-accent">stack</span>
        </Link>

        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {user && (
            <Link to="/todos" className={`nav-link ${isActive('/todos') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              Todos
            </Link>
          )}
          {user ? (
            <>
              <Link to="/profile" className={`nav-link ${isActive('/profile') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
                {user.name}
              </Link>
              <button className="btn btn-ghost nav-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className={`nav-link ${isActive('/login') ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                <button className="btn btn-accent nav-btn">Register</button>
              </Link>
            </>
          )}
        </div>

        <button className="navbar-burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
