import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAKLOwO_V5zBzovvqUVOdkHo9JCxvlsvMc",
    authDomain: "articledemo.firebaseapp.com",
    projectId: "articledemo",
    storageBucket: "articledemo.appspot.com",
    messagingSenderId: "1084057524922",
    appId: "1:1084057524922:web:f950c3af9d147285bc8083"
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();

  export {db}