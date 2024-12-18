import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import PageLogin from './pages/PageLogin';
import PageCheckEmail from './pages/PageCheckEmail';
import PageHome from './pages/PageHome';
import RootLayout from './layouts/RootLayout';
import PageAddressBook from './pages/PageAddressBook';
import PageBankDetails from './pages/PageBankDetails';
import PageDocuments from './pages/PageDocuments';
import PageAccountSettings from './pages/PageAccountSettings';
import PageContactSupport from './pages/PageContactSupport';
import PageProductBuy from './pages/PageProductBuy';
import PagePortofolio from './pages/PagePortofolio';
import PageTransaction from './pages/PageTransaction';

function App() {

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  // Komponen PrivateRoute untuk melindungi halaman
   const PrivateRoute = () => {
    // Jika sudah login, redirect ke home (atau halaman yang diinginkan)
    if (isLoggedIn) {
      return <Outlet />;
    }
    return <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/" /> : <PageLogin />} />
        <Route path="/check-email" element={isLoggedIn ? <Navigate to="/" /> : <PageCheckEmail />} />

        {/* Route yang dilindungi */}
        <Route path="/" element={<RootLayout />}>
          {/* Semua route di bawah ini dilindungi oleh PrivateRoute */}
          <Route element={<PrivateRoute />}>
            <Route index element={<PageHome />} />
            <Route path="home" element={<PageHome />} />
            <Route path="address-book" element={<PageAddressBook />} />
            <Route path="bank-details" element={<PageBankDetails />} />
            <Route path="documents" element={<PageDocuments />} />
            <Route path="account-settings" element={<PageAccountSettings />} />
            <Route path="contact-support" element={<PageContactSupport />} />
            <Route path="portofolio" element={<PagePortofolio />} />
            <Route path="transaction" element={<PageTransaction />} />
          </Route>
        </Route>

        {/* Route yang tidak dilindungi */}
        <Route path='/product-buy' element={<PageProductBuy />} />
      </Routes>
    </Router>
  );
}

export default App;
