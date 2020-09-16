import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_cdarW2hZLBWhXWYFcM_xcL0Gjzaifrc",
  authDomain: "clone-992a2.firebaseapp.com",
  databaseURL: "https://clone-992a2.firebaseio.com",
  projectId: "clone-992a2",
  storageBucket: "clone-992a2.appspot.com",
  messagingSenderId: "128495750692",
  appId: "1:128495750692:web:dce8c67265bd978e46d2b1",
  measurementId: "G-BQMDJRB1V7"
};


const fire = firebase.initializeApp(firebaseConfig)

//export const firestore = firebase.firestore();

//const provider = new firebase.auth.GoogleAuthProvider();

export default fire;