import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageCheckEmail from './pages/PageCheckEmail';
import PageProduct from './pages/PageProduct';
import RootLayout from './layouts/RootLayout';
import PageAddressBook from './pages/PageAddressBook';
import PageBankDetails from './pages/PageBankDetails';
import PageDocuments from './pages/PageDocuments';
import PageAccountSettings from './pages/PageAccountSettings';
import PageContactSupport from './pages/PageContactSupport';
import PageProductBuy from './pages/PageProductBuy';
import PagePortofolio from './pages/PagePortofolio';
import PageTransaction from './pages/PageTransaction';
import PageAddBankAccount from './pages/PageAddBankAccount';
import PageWithdraw from './pages/PageWithdraw';
import PageTransactionDetail from './pages/PageTransactionDetail';
import PageNotFound from './pages/PageNotFound';
import PageProductDetail from './pages/PageProductDetail';
import PageSellAsset from './pages/PageSellAsset';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const PrivateRoute = () => {
    if (isLoggedIn) {
      return <Outlet />;
    }
    return <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" replace/> : <PageLogin />} />
        <Route path="/check-email" element={isLoggedIn ? <Navigate to="/" replace /> : <PageCheckEmail />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<PageProduct />} />
            <Route path="product" element={<PageProduct />} />
            <Route path="address-book" element={<PageAddressBook />} />
            {/* <Route path="bank-details" element={<PageBankDetails />} /> */}
            <Route path="documents" element={<PageDocuments />} />
            <Route path="account-settings" element={<PageAccountSettings />} />
            <Route path="contact-support" element={<PageContactSupport />} />
            <Route path="portofolio" element={<PagePortofolio />} />
            <Route path="transaction" element={<PageTransaction />} />
            {/* <Route path='add-bank-account' element={<PageAddBankAccount />} /> */}
            <Route path='transaction/:id' element={<PageTransactionDetail />} />
            <Route path='product/:id' element={<PageProductDetail />} />
            
          </Route>
            <Route path='withdraw' element={<PageWithdraw /> } />
          <Route path='buy-asset' element={<PageProductBuy />} />
          <Route path='sell-asset' element={<PageSellAsset />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router> 
  );
}

export default App;
