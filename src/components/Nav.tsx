import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { User } from '../model/user';

const Nav = () => {
  const [user, setUser] = useState(new User());

  useEffect(() => {
    (async () => {
      const { data } = await axios.get('user');
      setUser(new User(data.id, data.firstName, data.lastName, data.email, data.role));
    })();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('logout', {});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">
        Company name
      </a>

      <ul className="my-2 my-md-0 mr-md-3">
        <Link to="/profile" className="p-2 text-white text-decoration-none">
          {user?.firstName}
        </Link>
        <Link to="/login" className="p-2 text-white text-decoration-none" onClick={handleLogout}>
          Sign out
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
