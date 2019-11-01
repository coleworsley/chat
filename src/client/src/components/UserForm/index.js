import React, { useContext, useState } from 'react';
import './index.css';
import { UserContext } from '../../context';

export const UserForm = () => {
  // const []
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
    console.log(formData)
    updateFormData({ ...formData, [e.target.name]: e.target.value});
  }

  return (
    <form className="UserForm" onSubmit={e => handleSubmit(e)}>
      <input
        id="user"
        name="user"
        type="text"
        value={formData.user}
        onChange={e => handleChange(e)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
