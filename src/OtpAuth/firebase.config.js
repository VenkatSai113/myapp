import firebase from 'firebase/app';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyBcnkJ-5BS4gI7_AxnuYXZXhD0b1M7VJps",
    authDomain: "phone-auth-b208f.firebaseapp.com",
    projectId: "phone-auth-b208f",
    storageBucket: "phone-auth-b208f.appspot.com",
    messagingSenderId: "12701621416",
    appId: "1:12701621416:web:8b095c431a3046af7fb69d"
}
firebase.initializeApp(config);
export default firebase