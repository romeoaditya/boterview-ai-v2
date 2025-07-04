// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABbhX7NX0Ede8fkIzdC0uOQoPnrnbmxA0",
  authDomain: "boterview-ai.firebaseapp.com",
  projectId: "boterview-ai",
  storageBucket: "boterview-ai.firebasestorage.app",
  messagingSenderId: "47792799910",
  appId: "1:47792799910:web:db72ea6a0e5b8eea227467",
  measurementId: "G-K4NGKWJ347",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
