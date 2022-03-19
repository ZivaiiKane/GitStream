import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './tailwind.css';
import App from './App';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NotFound from './pages/NotFound';
import Dashboard from './pages/user/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './pages/user/User';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='/' element={<ProtectedRoute />}>
            <Route path='dashboard/*' element={<Dashboard />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
