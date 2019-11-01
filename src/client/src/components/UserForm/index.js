import React, { useContext, useState } from 'react';
import './index.css';
import { UserContext } from '../../context';

export const UserForm = () => {
  const [user, updateUser] = useContext(UserContext);
  const [formData, updateFormData] = useState({ user: user.name });

  const handleSubmit = e => {
    e.preventDefault();
    updateUser({
      name: formData.user
    });
    localStorage.setItem('user', JSON.stringify({ name: formData.user }));
  };

  const handleChange = e => {
    updateFormData({ ...formData, [e.target.name]: e.target.value});
  }

  return (
    <form className="UserForm" onSubmit={e => handleSubmit(e)}>
      <label
        htmlFor="user"
        className="UserForm-label"
      >
        Username:
      </label>
      <input
        className="UserForm-input"
        id="user"
        name="user"
        type="text"
        placeholder="Type your name"
        value={formData.user}
        onChange={e => handleChange(e)}
      />
    </form>
  );
}
