// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFPSzqHXpms81uogGkBWlGZESCCS_Xlm8",
  authDomain: "auro-homes.firebaseapp.com",
  projectId: "auro-homes",
  storageBucket: "auro-homes.appspot.com",
  messagingSenderId: "620996243380",
  appId: "1:620996243380:web:b96c58cbad92d017fa4ce1",
  measurementId: "G-MRN2TG10N9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
