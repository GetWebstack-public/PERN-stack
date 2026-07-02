import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './HomePage.css';

export default function HomePage() {
  const { user } = useAuth();
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-badge">PERN Stack Starter Kit</div>
        <h1 className="hero-title">
          Ship faster with<br />
          <span className="hero-title-accent">PostgreSQL, Express,</span><br />
          React &amp; Node
        </h1>
        <p className="hero-subtitle">
          A production-ready boilerplate with JWT auth, a REST API, and a complete React frontend — deployed effortlessly on GWS.
        </p>
        <div className="hero-actions">
          {user ? (
            <Link to="/todos" className="btn btn-accent">Open Todos</Link>
          ) : (
            <>
              <Link to="/register" className="btn btn-accent">Get started</Link>
              <Link to="/login" className="btn btn-ghost-white">Sign in</Link>
            </>
          )}
        </div>
        <p>test</p>
        <div className="hero-stack">
          {['PostgreSQL', 'Express', 'React', 'Node.js'].map((t) => (
            <span key={t} className="hero-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
