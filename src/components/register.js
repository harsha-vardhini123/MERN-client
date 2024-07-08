import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const[res,setRes]=useState("")
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
   const response=await axios.post("http://localhost:3001/users/register",formData)

   console.log("form data successful",response.formData);

   setFormData({
    name: '',
    email: '',
    password: '',
   })
   setRes("User Register Sucessfully !");
}catch(err){
    console.log(err)
   }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center bg-indigo-200 p-6 rounded-lg">
        
      <h1 className="text-bold text-white mb-4">Register here</h1>
      <div className="form-group flex flex-col w-64">
        <label htmlFor="name" className="text-white mb-2">Username</label>
        <input 
          className="p-2 mb-4 rounded-md" 
          id="name" 
          name="name"
          type="text" 
          value={formData.name} 
          onChange={handleChange}
          placeholder="Enter your username"
        />
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
      <h1>{res}</h1>
    </form>
  );
}