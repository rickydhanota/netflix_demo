import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBDssLNkxTwbri0T7CVBkcVVVMWlYU-gZc",
    authDomain: "netflix-demo-79088.firebaseapp.com",
    projectId: "netflix-demo-79088",
    storageBucket: "netflix-demo-79088.appspot.com",
    messagingSenderId: "1042654521158",
    appId: "1:1042654521158:web:af2c6680d5494a7793e747"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  // const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth };