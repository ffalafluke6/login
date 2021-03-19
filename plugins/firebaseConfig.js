import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
     const firebaseConfig = {
          apiKey: "AIzaSyA78FH6qIzisGKu-p9UqNGHWeIlStLMK6U",
          authDomain: "login-7fa7e.firebaseapp.com",
          projectId: "login-7fa7e",
          storageBucket: "login-7fa7e.appspot.com",
          messagingSenderId: "581210503849",
          appId: "1:581210503849:web:4504c398b46efec8b887b8"
        };
  firebase.initializeApp(firebaseConfig)
}
export const shopshop = firebase.firestore()
export const auth = firebase.auth()