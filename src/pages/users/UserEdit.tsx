import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Wrapper from '../../components/Wrapper';
import { Role } from '../../model/role';
import axios from 'axios';

const UserEdit = (props: any) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', role: { id: 0, name: '' } });
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('roles');
        setRoles(response.data);

        const { data } = await axios.get('users/' + id);
        setForm(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((pr) => ({ ...pr, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      await axios.put('users/' + id, form);
      navigate('/users');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>First Name</label>
          <input className="form-control" defaultValue={form.firstName} name="firstName" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input className="form-control" defaultValue={form.lastName} name="lastName" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" defaultValue={form.email} name="email" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Role</label>
          <select
            className="form-control"
            name="role_id"
            value={form?.role?.id}
            onChange={(e) => setForm((pr) => ({ ...pr, [e.target.name]: e.target.value }))}
          >
            <option>Select a role</option>
            {roles.map((r: Role) => {
              return (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              );
            })}
          </select>
        </div>

        <button className="btn btn-outline-secondary">Save</button>
      </form>
    </Wrapper>
  );
};

export default UserEdit;
