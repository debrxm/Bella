import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBn4ZfO2hjiVTf4xg18dzWHwtIQYaDtKn8",
  authDomain: "chattie-3eb7b.firebaseapp.com",
  databaseURL: "https://chattie-3eb7b.firebaseio.com",
  projectId: "chattie-3eb7b",
  storageBucket: "chattie-3eb7b.appspot.com",
  messagingSenderId: "241163609783",
  appId: "1:241163609783:web:6b27d5fd897a168be24f32",
  measurementId: "G-9KG69P8B2M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firebase;
