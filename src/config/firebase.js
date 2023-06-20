
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD3eJoLIAuSM8Z-jDDDrxMDSiHmGsRa6CY",
  authDomain: "tiktok-clone-cd0d8.firebaseapp.com",
  projectId: "tiktok-clone-cd0d8",
  storageBucket: "tiktok-clone-cd0d8.appspot.com",
  messagingSenderId: "26310223468",
  appId: "1:26310223468:web:12b94bb293632d9d39da49"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;