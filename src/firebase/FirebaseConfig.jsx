// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyKeq6p3csHCg1XR1HalZ6KL3ux2JuoYA",
  authDomain: "zoblog-app.firebaseapp.com",
  projectId: "zoblog-app",
  storageBucket: "zoblog-app.appspot.com",
  messagingSenderId: "51022286996",
  appId: "1:51022286996:web:4d9efc93de94948cda6481"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const fireDb = getFirestore(app)
export const storage = getStorage(app)
