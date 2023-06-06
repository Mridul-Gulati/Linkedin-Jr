import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import {login, logout} from './features/userSlice';
import Login from './Login';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
      auth.onAuthStateChanged(userAuth => {
        if (userAuth){
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          }))
        } else{
          dispatch(logout());
        }
      })
  },[])
  return (
    <div className="app">
      <Header/>
      {!user ? (<Login/>) : (
      <div className='app_body'>
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div>
      ) 
      }
    </div>
  );
}

export default App;
