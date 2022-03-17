import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import axios from 'axios';
import { User } from '../../model/user';
import { Link } from 'react-router-dom';
const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('users?page=' + page);
        setUsers(data.data);
        setLastPage(data.meta.last_page);
      } catch (error) {}
    })();
  }, [page]);
  const prev = () => {
    if (page >= 1) setPage((pr) => pr - 1);
  };
  const next = () => {
    if (page < lastPage) setPage((pr) => pr + 1);
  };
  const deleteUser = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this record')) {
      try {
        await axios.delete(`users/${id}`);
        const { data } = await axios.get('users?page=' + page);
        setUsers(data.data);
        setLastPage(data.meta.last_page);
        // setUsers(users.filter((u: User) => u.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to="/users/create" className="btn btn-sm btn-outline-secondary">
          Add
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.role?.name}</td>
                  <td>
                    <div className="btn-group mr-2">
                      <Link to={`/users/${user.id}/edit`} className="btn btn-sm btn-outline-secondary">
                        Edit
                      </Link>
                      <a href="#" className="btn btn-sm btn-outline-secondary" onClick={() => deleteUser(user.id)}>
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prev}>
              Previous
            </a>
          </li>
          <li className="page-item">
            <a href="#" className="page-link" onClick={next}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Users;
