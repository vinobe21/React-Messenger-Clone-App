import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBgUPkh4yn2MMRffAkZGoxmgy6C1I3Tqs0",
    authDomain: "messager-clone-app.firebaseapp.com",
    projectId: "messager-clone-app",
    storageBucket: "messager-clone-app.appspot.com",
    messagingSenderId: "250674102253",
    appId: "1:250674102253:web:c59158b5b53dfd46b6b1e4",
    measurementId: "G-5WMX83S386"
});

const db = firebaseApp.firestore();

export default db;