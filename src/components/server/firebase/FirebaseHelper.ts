import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from 'firebase/auth'
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBTqhxK1Bk-H0BNys44bxCxg-Mi54iUcmU",
  authDomain: "linkhedin-pt2.firebaseapp.com",
  projectId: "linkhedin-pt2",
  storageBucket: "linkhedin-pt2.appspot.com",
  messagingSenderId: "894660697855",
  appId: "1:894660697855:web:b99f50ee3702b9367136ca",
  measurementId: "G-FS6SLKLMTV"
};

const app = initializeApp(firebaseConfig)
export const Auth = getAuth(app)
export const storage = getStorage(app)