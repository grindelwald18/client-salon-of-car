import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import BrandsPage from './pages/BrandsPage';
import StartPage from './pages/StartPage';
import BasketPage from './pages/BasketPage';
import AuthPage from './pages/AuthPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/auth' Component={AuthPage}/>
        <Route path='/' Component={StartPage}/>
        <Route path='/brands' Component={BrandsPage}/>
        <Route path='/basket' Component={BasketPage}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
