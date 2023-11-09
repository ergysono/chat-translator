import {getApp, getApps, initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getFunctions} from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAuVCm3z2Ym1cAd7b9nlcmaCo5GQmV5Uc",
  authDomain: "chat-translator-ba158.firebaseapp.com",
  projectId: "chat-translator-ba158",
  storageBucket: "chat-translator-ba158.appspot.com",
  messagingSenderId: "955992349586",
  appId: "1:955992349586:web:ea05a66c0c74c2ccdeff4b",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions();

export {db, auth, functions};
