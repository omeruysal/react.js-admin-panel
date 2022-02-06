import React, { SyntheticEvent, useEffect, useState } from 'react';
import '../Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', passwordConfirm: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((pr) => ({ ...pr, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('register', form);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="form-signin">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <input name="firstName" className="form-control" placeholder="First Name" onChange={handleChange} />
        <input name="lastName" className="form-control" placeholder="Last Name" onChange={handleChange} />
        <input name="email" type="email" className="form-control" placeholder="Email" onChange={handleChange} />
        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={handleChange}
        />
        <input
          name="passwordConfirm"
          type="password"
          className="form-control"
          placeholder="Password Confirm"
          required
          onChange={handleChange}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
};

export default Register;
