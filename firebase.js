// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGUmZNzSpDM7VgpXS8g78yJ_O10sGvklQ",
  authDomain: "kumudocs.firebaseapp.com",
  projectId: "kumudocs",
  storageBucket: "kumudocs.firebasestorage.app",
  messagingSenderId: "652105060147",
  appId: "1:652105060147:web:715f7ec2a3760aad9fb846",
  measurementId: "G-XPGFGPGX7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);