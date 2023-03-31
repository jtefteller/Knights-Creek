// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import firestore
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyA6jsmu8_wbPUo7V2nKdbxMrVzetAE2EoI",
	authDomain: "websites-1861c.firebaseapp.com",
	projectId: "websites-1861c",
	storageBucket: "websites-1861c.appspot.com",
	messagingSenderId: "227108207278",
	appId: "1:227108207278:web:0d6ee22e5e38b5eef50b3f",
	measurementId: "G-BPHKFQY7H5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
