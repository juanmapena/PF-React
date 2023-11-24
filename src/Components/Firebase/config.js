// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc9EziX9vUv095n-eHSIwzr0viBsOFCrk",
  authDomain: "e-commerce-eros.firebaseapp.com",
  projectId: "e-commerce-eros",
  storageBucket: "e-commerce-eros.appspot.com",
  messagingSenderId: "27371895716",
  appId: "1:27371895716:web:38fbcfc353e2d2ff04df31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//inicializa la base de datos
export const db = getFirestore (app)