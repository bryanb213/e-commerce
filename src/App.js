import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import ShopPage from './components/pages/shoppage/shop.component';
import HomePage from './components/pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInSignUp from './components/pages/sign-in-sign-up/sign-in-sign-up.component';


import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;
  
  //will mount compoonent after sign in for firebase
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }
      this.setState({currentUser: userAuth});
    });
  }
  
  componentWillUnmount() {
    //for logout for firebase
    this.unsubscribeFromAuth();
  }
  

  render (){
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App;
