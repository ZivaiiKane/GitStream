import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './tailwind.css';
import App from './App';
import Dashboard from './pages/user/dashboard';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='login' element={<h1>login</h1>} />
          <Route path='signup' element={<h1>signup</h1>} />
          <Route path='dashboard/*' element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
