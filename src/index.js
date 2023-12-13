import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BrandsPage from './pages/BrandsPage';
import StartPage from './pages/StartPage';
import BasketPage from './pages/BasketPage';
import AuthPage from './pages/AuthPage';
import AboutUs from './pages/AboutUsPage';
import ContractPage from './pages/ContractPage';
import SellerPage from './pages/NotApprovedContractsPage';
import NotApprovedContractsPage from './pages/NotApprovedContractsPage';
import ApprovedContractsPage from './pages/ApprovedConntractsPage';
import UserContractPage from './pages/UserContractPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/' element={<StartPage />} />
        <Route path='/brands' element={<BrandsPage />} />
        <Route path='/basket' element={<BasketPage />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contract/user' element={<UserContractPage />} />
        <Route path='/contract/not-approved' element={<NotApprovedContractsPage />} />
        <Route path='/contract/approved' element={<ApprovedContractsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();