import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAg5cjcpUSOzWUp2hmmB1VdKMZfVHsn3bo",
  authDomain: "webproject-7b23c.firebaseapp.com",
  projectId: "webproject-7b23c",
  storageBucket: "webproject-7b23c.appspot.com",
  messagingSenderId: "668234248584",
  appId: "1:668234248584:web:cbf1ee5e34c7943f6e0a3d",
  measurementId: "G-H6H62P2RRN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp)
export { firebaseApp, storage };