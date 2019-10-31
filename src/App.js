import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';
import './App.css'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';

import {auth, createUserProfileDocument} from  './firebase/firebase.utils';





class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser : null 
    }
  }

  unsubscribe = null;

  componentDidMount(){
    this.unsubscribe = auth.onAuthStateChanged(async userAuth =>{
     
      if(userAuth){
         const userRef = await createUserProfileDocument(userAuth);

         userRef.onSnapshot(snapShot =>{
           this.setState({
             currentUser : {
               id: snapShot.id, 
             ...snapShot.data()
             }
          }); 
        });

        console.log(this.state);
        
      }

      else{
        this.setState({currentUser: userAuth});
      }


    })
  }
 

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} /> 
        <Switch>
            <Route exact path='/' component ={ HomePage } />
            <Route path='/shop' component ={ ShopPage } />
            <Route path='/signin' component ={ SignInAndSignUpPage } />
        </Switch>
         
      </div>
    );
  }



  
}

export default App;
