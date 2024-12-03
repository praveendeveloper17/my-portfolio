import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projectlayout from './project-router/Projectlayout';
import Weather from './project-router/Weather';
import Calculator from './project-router/Calculator';
import Ecommerce from './project-router/Ecommerce';
import Todolist from './project-router/Todolist'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Application />} />
      <Route path="/project" element={<Projectlayout />} />
        <Route path="Weather" element={<Weather />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path='Ecommerce' element={<Ecommerce />} />
        <Route path='Todolist' element={<Todolist />} />
      
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
