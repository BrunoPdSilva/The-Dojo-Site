import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYxqlH0ugDLO5uWobgLeKw3jCBQzA-v54",
  authDomain: "the-dojo-62004.firebaseapp.com",
  projectId: "the-dojo-62004",
  storageBucket: "the-dojo-62004.appspot.com",
  messagingSenderId: "978547477564",
  appId: "1:978547477564:web:a4415049acfbf006804739",
};

//Iniciar firebase
firebase.initializeApp(firebaseConfig);

//Iniciar Serviços
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp();

export { projectFirestore, projectAuth, projectStorage, timestamp };
