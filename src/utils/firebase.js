// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhgCC63f5C3BQjcHAcDB8Qg62yfBLTf9s",
  authDomain: "netflixgpt-bf10a.firebaseapp.com",
  projectId: "netflixgpt-bf10a",
  storageBucket: "netflixgpt-bf10a.appspot.com",
  messagingSenderId: "1072303152305",
  appId: "1:1072303152305:web:292e2287f635bdae2c5690",
  measurementId: "G-TBT8KE8MCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();