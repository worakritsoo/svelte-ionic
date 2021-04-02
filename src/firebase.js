import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCeP-9OvB0zww-FI0Clti73JXnXBeADugM",
    authDomain: "pbox-58ae4.firebaseapp.com",
    projectId: "pbox-58ae4",
    storageBucket: "pbox-58ae4.appspot.com",
    messagingSenderId: "776114156881",
    appId: "1:776114156881:web:00d6fec941278583c2cf70",
    measurementId: "G-G426DC4VCT"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();