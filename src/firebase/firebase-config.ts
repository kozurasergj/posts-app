import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDNxGViFqEOpvzEPTB-nMujtV6gNZTG5m0',
  authDomain: 'nextjs-todolist-bced1.firebaseapp.com',
  projectId: 'nextjs-todolist-bced1',
  storageBucket: 'nextjs-todolist-bced1.appspot.com',
  messagingSenderId: '7608742550',
  appId: '1:7608742550:web:efb1acb63cba14a8fc88b7',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const postsCollectionRef = collection(db, 'posts')
