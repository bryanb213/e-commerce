import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShopPage from './components/pages/shoppage/shop.component';
import HomePage from './components/pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
