import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = import.meta.env.VITE_FIREBASE_CONFIG

export const app = initializeApp({ ...JSON.parse(firebaseConfig) })

export const db = getFirestore(app)
