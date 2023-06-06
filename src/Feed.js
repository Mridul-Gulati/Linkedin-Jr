import React, {useState, useEffect} from 'react';
import './Feed.css'
import InputOption from './InputOption';
import {MdCreate} from 'react-icons/md';
import { MdImage } from 'react-icons/md';
import { MdSubscriptions } from 'react-icons/md';
import { MdEventNote } from 'react-icons/md';
import { MdCalendarViewDay } from 'react-icons/md';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


function Feed() {
  const [posts, setPosts] = useState([]);
  const [input,setInput] = useState('');
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot =>(
      setPosts(snapshot.docs.map(doc =>(
        {
          id: doc.id,
          data: doc.data(),
        }
        )))
    ))
  },[]);
  const sendPost = (e) =>{
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");
  }
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <MdCreate/>
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          <InputOption Icon={MdImage} title="Photo" color="#70B5F9"/>
          <InputOption Icon={MdSubscriptions} title="Video" color="orange"/>
          <InputOption Icon={MdEventNote} title="Event" color="gray"/>
          <InputOption Icon={MdCalendarViewDay} title="Write Article" color="green"/>

        </div>
      </div>
      {posts.map(({id, data:{name, description, message,photoUrl}})=>(
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}

    </div>
  )
}

export default Feed
