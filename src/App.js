import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe
("pk_test_51LqHQcSAVNo5nx3BCfhIrJewCYaABZXdkfnMRA0AZv2eZSxUSWekJcaQcFXudEliwgY7veF3BzFrXjFdXVrVrzqh002PEJfGqJ"
);





function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...
    
    auth.onAuthStateChanged(authUser => {

      if(authUser){
        // the user is just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // logged out / was logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    // eslint-disable-next-line
  }, [])
  
  return (
    <Router>
      <div className="app">
        
          <Routes>
            <Route path="/login" element={
              <Login />} />
            <Route path='/checkout' element={[<Header />, <Checkout />]} />
            <Route path='/' element={[<Header />,
              <Home />]} />
            <Route path='/payments' element={<div>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements> 
            </div>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
