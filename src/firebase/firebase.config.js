// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6aWu0xhED-5WaVazIQm_j_d0wIzRqPPk",
    authDomain: "food-baverage-b5a91.firebaseapp.com",
    projectId: "food-baverage-b5a91",
    storageBucket: "food-baverage-b5a91.appspot.com",
    messagingSenderId: "964101744194",
    appId: "1:964101744194:web:3fafd4ef0e03c5433f6fdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;