import { initializeApp } from "firebase/app";
import {
    FacebookAuthProvider,
    getAuth,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDt01Obpaja8FA4nuXfoN1CfkApyOX63nE",
    authDomain: "n-yt-2ab00.firebaseapp.com",
    projectId: "n-yt-2ab00",
    storageBucket: "n-yt-2ab00.appspot.com",
    messagingSenderId: "153915398597",
    appId: "1:153915398597:web:216f60ec9e11098bb513ac",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();
GoogleProvider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

export { app, db, auth, storage, FacebookProvider, GoogleProvider };
