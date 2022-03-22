import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './tailwind.css';
import App from './App';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import NotFound from './pages/NotFound';
import Dashboard from './pages/user/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import User from './pages/user/User';
import { AnimatePresence } from 'framer-motion';

ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes key={location.pathname} location={location}>
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
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById('root')
);
