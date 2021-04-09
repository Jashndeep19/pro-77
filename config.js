import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyB-hfe8Xi4yFJ1stgE_hcKHivp4wKc9aT8",
  authDomain: "barter-system-410e9.firebaseapp.com",
  projectId: "barter-system-410e9",
  storageBucket: "barter-system-410e9.appspot.com",
  messagingSenderId: "327732263693",
  appId: "1:327732263693:web:28cd8a6bf698e61b70ce44"
};

  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
