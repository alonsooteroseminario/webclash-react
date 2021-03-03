import firebase from 'firebase/app';
import "@firebase/firestore";
  
const app = firebase.initializeApp({
    apiKey: "AIzaSyBsbw5mpNZqoJsTXXhDIDrBZJFZYDX6PDk",
    authDomain: "webclash-react.firebaseapp.com",
    projectId: "webclash-react",
    storageBucket: "webclash-react.appspot.com",
    messagingSenderId: "1090219903719",
    appId: "1:1090219903719:web:e63c8d90952a9acfdbb042",
    measurementId: "G-008RJXQQG5"
});

export function getFirebase() {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}