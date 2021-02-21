import React, {useEffect, useState} from "react";
import {Link}  from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {signin} from '../actions/userActions';

export default function SigninScreen(props) {

  const [email, setEmail] = useState("bka@google.com");
  const [password, setPassword] = useState("123");

  const userSignin = useSelector((state)=>state.userSignin);
  //const {userInfo,error, loading} = userSignin;
  console.log("userInfo fd");
  console.log(userSignin);

  const dispatch = useDispatch();

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log("userInfo fd");
    console.log(userSignin);
    dispatch(signin(email, password));
  };
  
  useEffect(()=>{
  //  if(userInfo){
      
     // props.history.push('/');
    //}
  },[]);

  return (<div className="signInPage">

    <form onSubmit={submitHandler}>

    <div className="sign-in">

    <h1>Sign In</h1>
      <div className="signInModal">
        
        <div className="signInUserName">
          <p>User Name: </p>
          <input placeholder="User Name ex. email address" />
        </div>

        <div className="signInUserPassword">
          <p>Password: </p>
          <input placeholder="Password" />
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
