import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/pages/Main';
import Product from './components/pages/Product';
import DefaultNotFound from './components/pages/DefaultNotFound';

const App = () => (
  <Router>
    <main className="w-11/12 lg:w-9/12 mx-auto min-h-screen">
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="*">
          <DefaultNotFound />
        </Route>
      </Switch>
      <Footer />
    </main>
  </Router>
);

export default App;
