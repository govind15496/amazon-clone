
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAuqv2F27yQL82n6GCpEfNecSCURIdeg6Y",
  authDomain: "clone-e34cd.firebaseapp.com",
  projectId: "clone-e34cd",
  storageBucket: "clone-e34cd.appspot.com",
  messagingSenderId: "201675211103",
  appId: "1:201675211103:web:4ac0f8bdcb82a0efb6f6ea",
  measurementId: "G-KE23G1W0VJ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };