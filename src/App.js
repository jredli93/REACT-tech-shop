import React from 'react';
import './App.scss';
import Navbar from './features/Components/Navbar/Navbar';
import Footer from './features/Components/Footer/Footer';
import Cart from './features/Containers/Cart/Cart';
import Home from './features/Containers/Home/Home';
import ProductDetails from './features/Components/ProductDetails/ProductDetails';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/product/:id" exact component={ProductDetails} />
        <Route path="/Cart" component={Cart} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
