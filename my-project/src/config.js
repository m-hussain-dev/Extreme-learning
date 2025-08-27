// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfZ74yEJRybmF5dKT-imt3WkppT8ltdLI",
  authDomain: "pizza-menu-6c1b7.firebaseapp.com",
  projectId: "pizza-menu-6c1b7",
  storageBucket: "pizza-menu-6c1b7.firebasestorage.app",
  messagingSenderId: "1092267527266",
  appId: "1:1092267527266:web:53d192ce8cd99cdd11d53b",
  measurementId: "G-W9S90SX4G3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
