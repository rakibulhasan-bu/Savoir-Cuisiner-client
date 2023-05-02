// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdMrEn3weEecSz3-5m1CJ8U1jzikgmcUM",
    authDomain: "savoir-cuisiner.firebaseapp.com",
    projectId: "savoir-cuisiner",
    storageBucket: "savoir-cuisiner.appspot.com",
    messagingSenderId: "80412758269",
    appId: "1:80412758269:web:ea536d7934d613a02fee94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;