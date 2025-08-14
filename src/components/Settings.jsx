import React from 'react';
import { useUser } from '../context/UserContext';

export const Settings = () => {
  const { loguser, loginUser, logoutUser } = useUser();

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Settings</h2>
      <div className="card p-4 shadow-sm border-0">
        <h4 className="mb-3">Account Settings</h4>
        {loguser && (
          <div className="mb-3">
            <p><strong>Username:</strong> {loguser.username}</p>
            <p><strong>phoneNumber:</strong> {loguser.phoneNumber}</p>
          </div>
        )}
        <div className="mb-4">
          <label className="form-label">Change Password</label>
          <input type="password" className="form-control mb-2" placeholder="New Password" style={{ maxWidth: '300px' }} />
          <button className="btn btn-warning btn-sm">Update Password</button>
        </div>
        <button className="btn btn-warning btn-sm mb-4">Save Changes</button>

        <h4 className="mt-4 mb-3">Notification Preferences</h4>
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input" id="emailNotifications" />
          <label className="form-check-label" htmlFor="emailNotifications">Email Notifications</label>
        </div>
        <div className="form-check mb-2">
          <input type="checkbox" className="form-check-input" id="pushNotifications" />
          <label className="form-check-label" htmlFor="pushNotifications">Push Notifications</label>
        </div>
        <button className="btn btn-warning btn-sm mb-4">Save Notification Settings</button>

        <h4 className="mt-4 mb-3">Security</h4>
        <div className="mb-4">
          <label className="form-label">Two-Factor Authentication</label>
          <select className="form-select mb-2" style={{ maxWidth: '300px' }}>
            <option>Disabled</option>
            <option>Enabled</option>
          </select>
          <button className="btn btn-warning btn-sm">Update Security</button>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={logoutUser}>Logout</button>
      </div>
    </div>
  );
};