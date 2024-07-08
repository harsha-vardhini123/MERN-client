import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [res, setRes] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/login", formData);
      console.log(response.data.message);
      setRes(response.data.message);
      setFormData({
        email: '',
        password: '',
      });
    } catch (err) {
      console.log(err.response.data.message);
      setRes(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center bg-indigo-200 p-6 rounded-lg">
      <h1 className="text-bold text-white mb-4">Login here</h1>
      <div className="form-group flex flex-col w-64">
        <label htmlFor="email" className="text-white mb-2">Email</label>
        <input 
          className="p-2 mb-4 rounded-md" 
          id="email" 
          name="email"
          type="email" 
          value={formData.email} 
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <label htmlFor="password" className="text-white mb-2">Password</label>
        <input 
          className="p-2 mb-4 rounded-md" 
          id="password" 
          name="password"
          type="password" 
          value={formData.password} 
          onChange={handleChange}
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className="bg-white text-blue-500 p-2 rounded-md mt-4">Submit</button>
      {res && <h1 className="mt-4 text-white">{res}</h1>}
    </form>
  );
}