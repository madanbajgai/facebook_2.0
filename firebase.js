import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSrmovjF_1HTIgIU5dY8eligjcNZTPafw",
  authDomain: "facebook2-464f4.firebaseapp.com",
  projectId: "facebook2-464f4",
  storageBucket: "facebook2-464f4.appspot.com",
  messagingSenderId: "108036192784",
  appId: "1:108036192784:web:25404008b681f14b67a895",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
