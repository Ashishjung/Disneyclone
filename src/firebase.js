import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDzls5ILDvSqALZadMx4Ni3Z4QwFO5hxvY",
  authDomain: "disneyplus-clone-f35f8.firebaseapp.com",
  projectId: "disneyplus-clone-f35f8",
  storageBucket: "disneyplus-clone-f35f8.appspot.com",
  messagingSenderId: "335775486109",
  appId: "1:335775486109:web:287369a084bc905f2b4474",
  measurementId: "G-Y8T0TW581N",
};
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
export const provider = new GoogleAuthProvider();
export default auth;
