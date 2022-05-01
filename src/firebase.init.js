// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyComMjLGcMDoPfNd9wwdhEWQgaiPTxDpiA",
    authDomain: "furniture-warehouse-455c7.firebaseapp.com",
    projectId: "furniture-warehouse-455c7",
    storageBucket: "furniture-warehouse-455c7.appspot.com",
    messagingSenderId: "533364252938",
    appId: "1:533364252938:web:c48f6afb67b443b56ddaf3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;