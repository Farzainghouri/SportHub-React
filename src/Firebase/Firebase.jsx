import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBDEQhBI4NnEICxrrboHNDo7o5JQewBKtM",
    authDomain: "sport-hub-36c15.firebaseapp.com",
    projectId: "sport-hub-36c15",
    storageBucket: "sport-hub-36c15.appspot.com",
    messagingSenderId: "979690208371",
    appId: "1:979690208371:web:38d2468a9cfa2b86bebe06",
    measurementId: "G-GWQ7BBG0K3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export  {db, storage};
