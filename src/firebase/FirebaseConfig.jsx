import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCQLJ0R67UnlEtQG6uciJfUpASSnI5Rz9s",
  authDomain: "test-7e43f.firebaseapp.com",
  projectId: "test-7e43f",
  storageBucket: "test-7e43f.appspot.com",
  messagingSenderId: "891259589522",
  appId: "1:891259589522:web:d21e7921e57ed6d293a74b",
//   measurementId: "G-6863F5K8G4"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
// const analytics = getAnalytics(app);