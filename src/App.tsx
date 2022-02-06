import Dashboard from './pages/Dashboard';
import Users from './pages/users/Users';
import Register from './pages/Register';
import Login from './pages/Login';
import UserCreate from './pages/users/UserCreate';
import UserEdit from './pages/users/UserEdit';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Roles from '../src/pages/roles/Roles';
import RoleCreate from '../src/pages/roles/RoleCreate';
import RoleEdit from '../src/pages/roles/RoleEdit';
import Products from './pages/products/Products';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Dashboard />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/users'} element={<Users />} />
          <Route path={'/users/create'} element={<UserCreate />} />
          <Route path={'/users/:id/edit'} element={<UserEdit />} />
          <Route path={'/roles'} element={<Roles />} />
          <Route path={'/roles/create'} element={<RoleCreate />} />
          <Route path={'/roles/:id/edit'} element={<RoleEdit />} />
          <Route path={'/products'} element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
