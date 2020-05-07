import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Cta from './Components/Cta/Cta';
import Footer from './Components/Footer/Footer';
import Products from './Containers/Products/Products';

function App() {
  return (
    <>
      <Navbar />
      <Cta />
      <Products />
      <Footer />
    </>
  );
}

export default App;
