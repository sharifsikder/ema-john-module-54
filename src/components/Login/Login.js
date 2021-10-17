import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const login = () => {
    return (
        <div className="login-form">
            <div className='form'>
              <h2> Please Login</h2>
              
              <form onSubmit="">
                  <input type="email" name="" placeholder="Your Email"/>
                  <br/>
                  
                  <input type="password" name="" placeholder="password"/>
                  <br/>
                   <p> Create a New ema john ? <Link to="/resgister">Create Account</Link> </p>
                   
                   <button>Google Sign In </button>
                  
              </form>

            </div>

        </div>
    );
};

export default login;