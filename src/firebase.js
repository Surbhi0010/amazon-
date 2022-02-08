
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-rhPAoThISDX-CsprF_E_0K5uCHmsU4k",
    authDomain: "challange-6c73a.firebaseapp.com",
    projectId: "challange-6c73a",
    storageBucket: "challange-6c73a.appspot.com",
    messagingSenderId: "471902965373",
    appId: "1:471902965373:web:fce99f445439905031ab14",
    measurementId: "G-416L6CN756"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore()
   const auth= firebase.auth()
   
export {auth, db}