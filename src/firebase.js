// import { getData } from "@syncfusion/ej2/spreadsheet";
// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/database";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQRITxLr4jespWieHBGCtcD4pn6G3KfbU",
  authDomain: "react-dashboard-c3236.firebaseapp.com",
  databaseURL: "https://react-dashboard-c3236-default-rtdb.firebaseio.com",
  projectId: "react-dashboard-c3236",
  storageBucket: "react-dashboard-c3236.appspot.com",
  messagingSenderId: "1002667500386",
  appId: "1:1002667500386:web:f9e07c2bce5f98cdf9423b",
  measurementId: "G-Z3526XZ1GW",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const notesRef = databaseRef.child("react-dashboard");
// export const db = getDatabase(app);
export default firebase;
