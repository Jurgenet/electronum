import Vue from 'vue'
import firebase from '@firebase/app'
import VueFire from 'vuefire'
import 'firebase/firestore'

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCWGAdb5th2S320_H8eK17902mmn2ZDPJA',
  authDomain: 'sandy-v1.firebaseapp.com',
  databaseURL: 'https://sandy-v1.firebaseio.com',
  projectId: 'sandy-v1',
  storageBucket: 'sandy-v1.appspot.com',
  messagingSenderId: '673874169490'
})

const db = firebaseApp.firestore()

export { db }
