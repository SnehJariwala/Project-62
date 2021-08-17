import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBdgLiy97sbqx9TMYQoOC69vfhubL5HnB0",
    authDomain: "school-attendance-app-7be7a.firebaseapp.com",
    databaseURL: "https://school-attendance-app-7be7a-default-rtdb.firebaseio.com",
    projectId: "school-attendance-app-7be7a",
    storageBucket: "school-attendance-app-7be7a.appspot.com",
    messagingSenderId: "605672910971",
    appId: "1:605672910971:web:8fb926ec208365b0c5b2de",
    measurementId: "G-1H8888WN6Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();