import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = JSON.parse(Buffer.from(process.env.FIREBASE_CONFIG, 'base64').toString())

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore()
