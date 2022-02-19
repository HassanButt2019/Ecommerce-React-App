// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6cBj9L7uRi-8_2_Ajc_PXDl9dbqk5Hzw",
  authDomain: "react-ecommerce-688be.firebaseapp.com",
  projectId: "react-ecommerce-688be",
  storageBucket: "react-ecommerce-688be.appspot.com",
  messagingSenderId: "275546228897",
  appId: "1:275546228897:web:98c167dfd8c367d36c88e0",
  measurementId: "G-QNHZ406BEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export const auth = app.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();