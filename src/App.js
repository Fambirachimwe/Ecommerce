import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import './App.css'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';

import {connect} from 'react-redux';


import {auth, createUserProfileDocument} from  './firebase/firebase.utils';
import { setCurrentUser } from "./redux/user/user.actions";


class App extends React.Component{
 

  unsubscribe = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unsubscribe = auth.onAuthStateChanged(async userAuth =>{
     
      if(userAuth){
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot =>{
          setCurrentUser({
             currentUser : {
               id: snapShot.id, 
             ...snapShot.data()
             }
          }, () => console.log(this.state) ); 
        });

        // console.log(this.state);
        
      }

      setCurrentUser( userAuth);
      


    })
  }
 

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(){
    return (
      <div className="App">
        <Header /> 
        <Switch>
            <Route exact path='/' component ={ HomePage } />
            <Route path='/shop' component ={ ShopPage } />
            <Route path='/signin' component ={ SignInAndSignUpPage } />
        </Switch>
         
      </div>
    );
  }
}



const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(null, mapDispatchToProps )(App);
