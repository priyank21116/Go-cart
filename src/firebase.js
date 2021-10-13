import firebase from 'firebase';

const firebaseConfig = {
      apiKey: "AIzaSyCtUB2ppx8wCtCm6SRXDMgZHSFMBS6A1K4",
      authDomain: "pickflip-d807a.firebaseapp.com",
      projectId: "pickflip-d807a",
      storageBucket: "pickflip-d807a.appspot.com",
      messagingSenderId: "195724226834",
      appId: "1:195724226834:web:e4a8cd5a526536e296c3cb",
      measurementId: "G-4T6K2QWMNR"
}


firebase.initializeApp(firebaseConfig);
firebase.analytics()

export default firebase