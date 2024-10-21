import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { setItem } from "localforage";


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
const auth = getAuth(app);


// Set auth language (optional)
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info
        const user = result.user;
        console.log("User signed in: ", user.uid);
        localStorage.setItem("user", user.uid);
        localStorage.setItem("email", user.email);
        // const uid = res.user.uid;
    // You can save user info like the UID, email, etc. here
        // console.log("User ID: ", user.uid);
    } catch (error) {
        // Handle Errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData?.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

        console.error("Error during sign-in: ", errorMessage);
    }
};


export { db, storage, auth, signInWithGoogle };
