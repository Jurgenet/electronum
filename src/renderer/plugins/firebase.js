import Vue from 'vue'
import firebase from '@firebase/app'
import VueFire from 'vuefire'
import 'firebase/firestore'

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
  /* key */
})

const db = firebaseApp.firestore()

export { db }
