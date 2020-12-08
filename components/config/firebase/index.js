import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const Config = {
  apiKey: "AIzaSyBSzcUj6FJPW_4AejJYyQLD349WOtn1X2c",
  authDomain: "tani-bisnis-shop-project.firebaseapp.com",
  databaseURL: "https://tani-bisnis-shop-project-default-rtdb.firebaseio.com",
  projectId: "tani-bisnis-shop-project",
  storageBucket: "tani-bisnis-shop-project.appspot.com",
  messagingSenderId: "534897755844",
  appId: "1:534897755844:web:b929bc152fd7085109eb91"
};
// Initialize Firebase
firebase.initializeApp(Config);

export const database = firebase.database();

export default firebase;