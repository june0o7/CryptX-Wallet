// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuh4UDayR6MlbgGjU3Y1JkjvEkxPZU93w",
  authDomain: "codarcraft.firebaseapp.com",
  projectId: "codarcraft",
  storageBucket: "codarcraft.appspot.com",
  messagingSenderId: "1065888667917",
  appId: "1:1065888667917:web:c04b1f69b46648509e3844",
  measurementId: "G-FEZ204YKRM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;