import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBig89qwZtl0H3ykwLZwJzMwTCfWymmqgQ",
    authDomain: "wily-a661c.firebaseapp.com",
    projectId: "wily-a661c",
    storageBucket: "wily-a661c.appspot.com",
    messagingSenderId: "891518600452",
    appId: "1:891518600452:web:87dd441788bc9f63223c51"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();