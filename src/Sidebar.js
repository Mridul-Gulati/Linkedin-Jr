import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);
    const recentItem = (topic)=>(
        <div className='sidebar_recentItem'>
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    );


  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img className='back' src={require('./Images/johannes-plenio-qkfxBc2NQ18-unsplash.jpg')} alt="pic"></img>
        <img className='profile' src={user.photoURL} alt={user.email[0]}></img>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className='sidebar_stats'>
      <div className='sidebar_stat'>
        <p>Who viewed you</p>
        <p className='sidebar_statNumber'>253</p>
      </div>
      <div className='sidebar_stat'>
        <p>Views on post</p>
        <p className='sidebar_statNumber'>105</p>
      </div>
      </div>
      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("SWE")}
        {recentItem("Design")}
        {recentItem("development")}

      </div>
    </div>
  )
}

export default Sidebar
