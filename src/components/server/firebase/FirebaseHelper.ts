import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDTZRjsPWmS-_84S_q18G0gIMgwlJhs7SA",
  authDomain: "linkhedin-360923.firebaseapp.com",
  projectId: "linkhedin-360923",
  storageBucket: "linkhedin-360923.appspot.com",
  messagingSenderId: "474209665783",
  appId: "1:474209665783:web:6da55abfbc4bc185c089f2",
  measurementId: "G-7M35QEZ4XB"
};

const app = initializeApp(firebaseConfig)
export const Auth = getAuth(app)
export const storage = getStorage(app)