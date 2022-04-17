import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCmhBmH0YHLmWQ0cZB38q-pKzt3cTXi6MU",
    authDomain: "ecomercereact-4742f.firebaseapp.com",
    projectId: "ecomercereact-4742f",
    storageBucket: "ecomercereact-4742f.appspot.com",
    messagingSenderId: "56186607331",
    appId: "1:56186607331:web:41ae48b007da5eb2ae57d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const firestoreDb = getFirestore(app)