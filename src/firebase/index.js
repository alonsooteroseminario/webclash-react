import firebase from 'firebase/app';
import "@firebase/firestore";
  
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FS_API_KEY,
    authDomain: process.env.REACT_APP_FS_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FS_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FS_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FS_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FS_APP_ID,
    measurementId: process.env.REACT_APP_FS_MEASUREMENT_ID
});

export function getFirebase() {
    return app;
}

export const getFirestore = () => {
    return firebase.firestore(app);
}