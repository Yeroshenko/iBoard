import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyAPAYXk660SKZqgSGFWI0TaEUM1jesTQZU',
  authDomain: 'iboard1.firebaseapp.com',
  databaseURL: 'https://iboard1.firebaseio.com',
  projectId: 'iboard1',
  storageBucket: 'iboard1.appspot.com',
  messagingSenderId: '1024623159835',
  appId: '1:1024623159835:web:ab933801618be6af64e6be'
})

firebase.auth().languageCode = 'ru'

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
// export const facebookProvider = new firebase.auth.FacebookAuthProvider()
// export const googleProvider = new firebase.auth.GoogleAuthProvider()
// export const githubProvider = new firebase.auth.GithubAuthProvider()
