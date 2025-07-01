// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ91WNWDM5-4UZFD0Lz91FFJ_ozBGnT1M",
  authDomain: "skooli-fc836.firebaseapp.com",
  projectId: "skooli-fc836",
  storageBucket: "skooli-fc836.firebasestorage.app",
  messagingSenderId: "737144697022",
  appId: "1:737144697022:web:6ccd0feceda270b9282eef",
  measurementId: "G-52NGZH4MR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);