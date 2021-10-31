import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBvfKVfStau1mc3gjbG_yZQcZOx9_ZYL4Q",
  authDomain: "hute-f455c.firebaseapp.com",
  projectId: "hute-f455c",
  storageBucket: "hute-f455c.appspot.com",
  messagingSenderId: "862086212852",
  appId: "1:862086212852:web:d21fc5abe08f3f5b65c2a1",
  measurementId: "G-84Z72EY97R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
