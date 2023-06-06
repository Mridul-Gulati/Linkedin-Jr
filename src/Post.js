import React from 'react';
import InputOption from './InputOption';
import './Post.css';
import { MdChat, MdSend, MdShare, MdThumbUp } from 'react-icons/md';


function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
      <div className='post_header'>
      <img src={photoUrl} alt={name[0]}></img>
        <div className='post_info'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
      </div>
      <div className='post_body'>
        <p>{message}</p>
      </div>
      <div className='post_buttons'>
        <InputOption Icon={MdThumbUp} title="Like" color="gray"/>
        <InputOption Icon={MdChat} title="Comment" color="gray"/>
        <InputOption Icon={MdShare} title="Share" color="gray"/>
        <InputOption Icon={MdSend} title="Send" color="gray"/>

      </div>
    </div>
  )
}

export default Post