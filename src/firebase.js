import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCs_htT8V26ppbsjGsOuGqlZRHXn_7owQI",
    authDomain: "react-slack-clone-e5bac.firebaseapp.com",
    databaseURL: "https://react-slack-clone-e5bac.firebaseio.com",
    projectId: "react-slack-clone-e5bac",
    storageBucket: "react-slack-clone-e5bac.appspot.com",
    messagingSenderId: "987342376141",
    appId: "1:987342376141:web:65aecdc835d768b2"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;
