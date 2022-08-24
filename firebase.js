import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyADIJZ_fHeWm0kqWP46n95hARxZD1iYxfw",
    authDomain: "app-5d289.firebaseapp.com",
    databaseURL: "https://app-5d289-default-rtdb.firebaseio.com",
    projectId: "app-5d289",
    storageBucket: "app-5d289.appspot.com",
    messagingSenderId: "573260098079",
    appId: "1:573260098079:web:173d17bcab9916b80c432a",
    measurementId: "G-XMM05Y96XZ"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;