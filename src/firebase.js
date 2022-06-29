// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: 'netflix-clone-3f8f6.firebaseapp.com',
  projectId: 'netflix-clone-3f8f6',
  storageBucket: 'netflix-clone-3f8f6.appspot.com',
  messagingSenderId: '1036140577010',
  appId: '1:1036140577010:web:cbaf3d34e53dee0b94d06b',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
