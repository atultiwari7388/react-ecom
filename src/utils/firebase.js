import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBAYlCQr8snpHGmpWQGuRmUv3vlteIHAeY',
  authDomain: 'react-ecom-c4355.firebaseapp.com',
  projectId: 'react-ecom-c4355',
  storageBucket: 'react-ecom-c4355.appspot.com',
  messagingSenderId: '1032364834284',
  appId: '1:1032364834284:web:a2f23d25929f88cd4dd4c9',
  measurementId: 'G-29QEXZ9795',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
