import React from 'react';
import { useAuth } from '../../context/AuthContext';
import './ProfilePage.css';

export default function ProfilePage() {
  const { user } = useAuth();

  const initials = user?.name
    ? user.name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
    : '?';

  const fields = [
    { label: 'Full name', value: user?.name },
    { label: 'Email', value: user?.email },
    { label: 'Role', value: user?.role },
    { label: 'Member since', value: user?.created_at ? new Date(user.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) : '—' },
  ];

  return (
    <div className="page">
      <div className="profile-card card">
        <div className="profile-avatar">{initials}</div>
        <h2 className="profile-name">{user?.name}</h2>
        <span className="profile-role-badge">{user?.role}</span>

        <div className="profile-fields">
          {fields.map(({ label, value }) => (
            <div key={label} className="profile-field">
              <span className="profile-field-label">{label}</span>
              <span className="profile-field-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
