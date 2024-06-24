
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJFVGOK9Jg31jzRBH-coyZIwyevyrpycE",
  authDomain: "react-netflix-clone-69bde.firebaseapp.com",
  projectId: "react-netflix-clone-69bde",
  storageBucket: "react-netflix-clone-69bde.appspot.com",
  messagingSenderId: "239978273444",
  appId: "1:239978273444:web:f9912ef313f0e46bd66431",
  measurementId: "G-Q7LN9F9ZN0"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);