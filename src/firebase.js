// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getFirestore} from "firebase/firestore"

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCtUB2ppx8wCtCm6SRXDMgZHSFMBS6A1K4",
  authDomain: "pickflip-d807a.firebaseapp.com",
  databaseURL: "https://pickflip-d807a-default-rtdb.firebaseio.com",
  projectId: "pickflip-d807a",
  storageBucket: "pickflip-d807a.appspot.com",
  messagingSenderId: "195724226834",
  appId: "1:195724226834:web:e4a8cd5a526536e296c3cb",
  measurementId: "G-4T6K2QWMNR"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export default getFirestore();