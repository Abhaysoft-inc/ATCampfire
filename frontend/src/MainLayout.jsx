// MainLayout.js
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
