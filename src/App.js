import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ShopPage from './components/pages/shoppage/shop.component';
import HomePage from './components/pages/homepage/homepage.component';
import ContactPage from './components/pages/contact/contact.component';
import Header from './components/header/header.component';
import SignInSignUp from './components/pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './components/checkout/checkout.component';


import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {
  unsubscribeFromAuth = null;
  
  
  //will mount compoonent after sign in for firebase
  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          //console.log(this.state);
        });
      }  
      setCurrentUser(userAuth);
    });
  }
  
  componentWillUnmount() {
    //for logout for firebase
    this.unsubscribeFromAuth();
  }
  

  render (){
    return (
      <div>
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route 
            exact 
            path="/signin" 
            render={() => 
            this.props.currentUser ? (<Redirect to='/' />) 
            : 
            (<SignInSignUp />)
            } 
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
