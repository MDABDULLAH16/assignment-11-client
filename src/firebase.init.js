// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3MHqnMM2ppllUPz0r1iKDl-7OoWK-YPw",
    authDomain: "assignment-11-5e03b.firebaseapp.com",
    projectId: "assignment-11-5e03b",
    storageBucket: "assignment-11-5e03b.appspot.com",
    messagingSenderId: "1077308467486",
    appId: "1:1077308467486:web:01ab086b150041ea21c10f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;