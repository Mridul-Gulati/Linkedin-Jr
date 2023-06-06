import React from 'react'
import {MdSearch} from 'react-icons/md';
import './Header.css';
import HeaderOption from './HeaderOption';
import { MdHome } from 'react-icons/md';
import { MdSupervisorAccount } from 'react-icons/md';
import { MdBusinessCenter } from 'react-icons/md';
import { MdChat } from 'react-icons/md';
import { MdNotifications } from 'react-icons/md';
import { useDispatch, } from 'react-redux';
import { auth } from './firebase';
import { logout, } from './features/userSlice';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () =>{
    dispatch(logout())
    auth.signOut();
  }
  return (
    <div className='header'>
        <div className='header_left'>
            <img src={require('./Images/logo.png')} alt=''/>
        
        <div className='header_search'>
            <MdSearch/>
            <input placeholder='Search' type="text"></input>
        </div>
        </div>

        <div className='header_right'>
          <HeaderOption Icon={MdHome} title="Home"/>
          <HeaderOption Icon={MdSupervisorAccount} title="My Network"/>
          <HeaderOption Icon={MdBusinessCenter} title="Jobs"/>
          <HeaderOption Icon={MdChat} title="Messaging"/>
          <HeaderOption Icon={MdNotifications} title="Notifications"/>
          <button onClick={logoutOfApp}>Logout</button>
        </div>
    </div>
  )
}

export default Header
