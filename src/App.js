import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/pages/Main';
import Product from './components/pages/Product';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
