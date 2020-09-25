import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA4Tj9ymsAeQuugmLdo8r32k4_Z7bYnXWM",
  authDomain: "whatsapp-clone-reactjs-bf6f5.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-reactjs-bf6f5.firebaseio.com",
  projectId: "whatsapp-clone-reactjs-bf6f5",
  storageBucket: "whatsapp-clone-reactjs-bf6f5.appspot.com",
  messagingSenderId: "1066253558968",
  appId: "1:1066253558968:web:ccb244e0fcd8fa4629404d",
  measurementId: "G-BDZGVN3S35"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
