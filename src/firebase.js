import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAZstOOpY9R-RJKz0XMzM-nTCGIMK2Xr7U",
    authDomain: "linkedin-clone-2c0f6.firebaseapp.com",
    projectId: "linkedin-clone-2c0f6",
    storageBucket: "linkedin-clone-2c0f6.appspot.com",
    messagingSenderId: "265831220419",
    appId: "1:265831220419:web:881ccc0d2b291715c28e76"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};