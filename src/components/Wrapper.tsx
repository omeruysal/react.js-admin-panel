import React, { useEffect, useState } from 'react';
import Menu from '../components/Menu';
import Nav from '../components/Nav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { User } from '../model/user';

const Wrapper = (props: any) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(new User());
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('user');
        setUser(data);
      } catch (error) {
        navigate('/login');
      }
    })();
  }, []);
  return (
    <>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <Menu />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">{props.children}</main>
        </div>
      </div>
    </>
  );
};

export default Wrapper;
