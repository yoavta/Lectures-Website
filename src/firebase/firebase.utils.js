import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANV3wEnIQnWf-u7fetJZj9Z7R4yNFYTsk",
    authDomain: "lecture-website.firebaseapp.com",
    projectId: "lecture-website",
    storageBucket: "lecture-website.appspot.com",
    messagingSenderId: "35306829251",
    appId: "1:35306829251:web:76a7982acb2d3719b6f976",
    measurementId: "G-EXY6KBNGL2"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;