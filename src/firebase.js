import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBMy_Zedv7npQwU8BM1lePqE-ih0lczTzo",
  authDomain: "twitter-60397.firebaseapp.com",
  projectId: "twitter-60397",
  storageBucket: "twitter-60397.appspot.com",
  messagingSenderId: "100636803604",
  appId: "1:100636803604:web:229edbc8497ba528cbdd01"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = getStorage(firebaseApp)