import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = import.meta.env.VITE_FIREBASE_CONFIG
console.log({ ...JSON.parse(firebaseConfig) })
console.log('eh')
console.log(JSON.parse(firebaseConfig))

export const app = initializeApp({ ...JSON.parse(firebaseConfig) })

export const db = getFirestore(app)
