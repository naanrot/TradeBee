import { StatusBar } from "expo-status-bar";
import React from "react";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBKWrPDY91TETHzJ-XdEaTV2DZ0EpeBJCg",
  authDomain: "tradebee-46f89.firebaseapp.com",
  projectId: "tradebee-46f89",
  storageBucket: "tradebee-46f89.appspot.com",
  messagingSenderId: "1098929057753",
  appId: "1:1098929057753:web:7d1e0264afe77d39ca73c8",
  measurementId: "G-DBPK74BGCP"
};

//When ever expo build:android command is executed, do step 3 from this url https://docs.expo.io/versions/latest/sdk/google-sign-in/
//in 'Usage with Firebase'
export default function App() {
  firebase.initializeApp(firebaseConfig);
  return <LoginScreen />;
}
