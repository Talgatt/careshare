import React from "react";
import {Link}  from "react-router-dom";


export default function SigninScreen() {
  return (<div className="signInPage">

    <form>

    <div className="sign-in">

    <h1>Sign In</h1>
      <div className="signInModal">
        
        <div className="signInUserName">
          <p>User Name: </p>
          <input placeHolder="User Name ex. email address" />
        </div>

        <div className="signInUserPassword">
          <p>Password: </p>
          <input placeHolder="Password" />
        </div>

      </div>

      <div >
        <button className="sign-in-btn">Sign In</button>
      </div>

      <div>

        <p className="createAccountTextwithLink">Don't have an account? Choose to <Link to="/register">Sign Up!</Link></p>

      </div>

    </div>
 


    </form>

  </div>);
}
