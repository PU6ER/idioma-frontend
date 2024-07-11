// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAe2XiCfeJt7SGnkd3nWY3AVECirKTRviU',
	authDomain: 'idioma-119e9.firebaseapp.com',
	projectId: 'idioma-119e9',
	storageBucket: 'idioma-119e9.appspot.com',
	messagingSenderId: '585584710769',
	appId: '1:585584710769:web:de8e089e4719f77cefb7d0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
