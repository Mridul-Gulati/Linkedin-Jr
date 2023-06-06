import React, { useState } from 'react';
import './Login.css';
import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import {login} from './features/userSlice';

function Login() {
  const [email, SetEmail] = useState("");
  const [name, SetName] = useState("");
  const [password, SetPassword] = useState("");
  const [profilePic, SetProfilePic] = useState("");
  const dispatch = useDispatch();

  const register=()=>{
    if (!name){
      return alert('Please enter a full name!');
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profilePic,
        })
        );
      });
    }).catch(error => alert(error));
  };
  const loginToApp=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth =>{
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoURL: userAuth.user.photoURL,

      }))
    }).catch((error) => alert(error));
  };

  return (
    <div className='login'>
      <img src='https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks' alt=""></img>
      <form>
        <input value = {name} onChange={e => SetName(e.target.value)} placeholder="Full name (required)" type="text"></input>
        <input value ={profilePic} onChange={e=>SetProfilePic(e.target.value)} placeholder="Profile Pic URL (optional)" type="text"></input>
        <input value={email} onChange={e => SetEmail(e.target.value)} placeholder="Email (required)" type="email"></input>
        <input value={password} onChange={e => SetPassword(e.target.value)} placeholder="Password (required)" type="password"></input>
        <button type='submit' onClick={loginToApp}>Sign in</button>
      </form>
      <p>Not a member?{" "}
        <span className='login_register' onClick={register}>Register now</span>
      </p>
    </div>
  )
}

export default Login
