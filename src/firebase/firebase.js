// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACJEu_N16Z-7HydqIKDNXqpvMG0xU6dQw",
  authDomain: "react-stephenking-collection.firebaseapp.com",
  projectId: "react-stephenking-collection",
  storageBucket: "react-stephenking-collection.appspot.com",
  messagingSenderId: "75992723318",
  appId: "1:75992723318:web:8bd8a8b96fe7aa6dc69457",
  measurementId: "G-2EQL0B14XZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default function getFirestoreApp() {
  return app;
}
