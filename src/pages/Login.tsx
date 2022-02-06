import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((pr) => ({ ...pr, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post('login', {
        email: form.email,
        password: form.password,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="form-signin">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please log in</h1>
        <input name="email" type="email" className="form-control" placeholder="Email" onChange={handleChange} />
        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="Password"
          required
          onChange={handleChange}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Log in
        </button>
      </form>
    </main>
  );
};

export default Login;
