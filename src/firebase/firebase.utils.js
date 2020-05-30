import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCWFw7svdZZSLVKDGtpiB25cZ7jSNCDfGE',
  authDomain: 'my-portfolio-de8a8.firebaseapp.com',
  databaseURL: 'https://my-portfolio-de8a8.firebaseio.com',
  projectId: 'my-portfolio-de8a8',
  storageBucket: 'my-portfolio-de8a8.appspot.com',
  messagingSenderId: '342750038104',
  appId: '1:342750038104:web:3997a769f6bea0378d222d',
  measurementId: 'G-QGPR9T5TS0',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();

export default firebase;
