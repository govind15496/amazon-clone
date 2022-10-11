import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";


function Loing() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signIn = e => {
    e.preventDefault();

    auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate('/')
        })
        .catch(error => alert(error.message))
  }


  const register = e => {
    e.preventDefault();


    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          navigate('/');
        }).catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img 
          className='login__logo' 
          src='https://blog.logomyway.com/wp-content/uploads/2017/02/amazon-logo-1.jpg' 
          alt='' 
       />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>


        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} 
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input type="password" value={password} 
            onChange={e => setPassword(e.target.value)}
          />

          <button 
            type='submit' onClick={signIn}
            className='login__signInButton'>Sign In
          </button>
        </form>

        <p>
          By signing-in, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        
        <div className='login__new'>
          <hr />
          <h5>New to Amazon?</h5> 
          <hr />
        </div>
        
        <button type="submit" 
          onClick={register}
          className='login__registerButton'>
          Create your Amazon account
        </button>

      </div>
    </div> 
  )
}

export default Loing;