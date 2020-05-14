import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Containers/About/About';
import Home from './Containers/Home/Home';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" exact component={ProductDetails} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
