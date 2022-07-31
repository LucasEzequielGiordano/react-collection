// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhkk6_HntCzroxwrm1R_TGhY_GdM4SDbM",
  authDomain: "stephenking-collection.firebaseapp.com",
  projectId: "stephenking-collection",
  storageBucket: "stephenking-collection.appspot.com",
  messagingSenderId: "393547623675",
  appId: "1:393547623675:web:1b2045fd38c659b55fd45e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}
