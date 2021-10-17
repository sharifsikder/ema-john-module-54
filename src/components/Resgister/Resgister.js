import React from 'react';
import { Link } from 'react-router-dom';

const Resgister = () => {
    return (
  <div className="login-form">
            <div className="form">
            <h1> Create Account </h1>
            <form onSubmit="">
                <input type="email" placeholder="Email"/>
                <br/>
                <input type="password" placeholder="password"/>
                <br/>
                <input type="phone" placeholder="phone"/>
                <br/>
                <br/>
                <input type="submit" placeholder=""/>

                <br/>

                <button>Google Sign Up</button>
                <br/>
                <br/>
                <Link to="/login">Already Create Account</Link>
            </form>

        </div>
  </div>
    );
};

export default Resgister;