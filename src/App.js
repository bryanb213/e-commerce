import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import ShopPage from './components/pages/shoppage/shop.component';
import HomePage from './components/pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInSignUp from './components/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
