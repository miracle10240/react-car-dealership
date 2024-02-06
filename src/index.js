import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsedCar from './components/Used-car';
import Product from './components/Product/Product';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/used-car" element={<UsedCar />} />
      <Route path="/car/:id" element={<Product />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
