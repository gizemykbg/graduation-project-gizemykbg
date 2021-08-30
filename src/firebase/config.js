import firebase from 'firebase/app';
// import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// if (!firebase.apps.length) {
firebase.initializeApp({
  apiKey: 'AIzaSyD9mhCwR_fQP5sTp7prG8tAGWXuTWBMNjk',
  authDomain: 'apply-auth-e893f.firebaseapp.com',
  databaseURL: 'https://apply-auth-e893f-default-rtdb.firebaseio.com',
  projectId: 'apply-auth-e893f',
  storageBucket: 'apply-auth-e893f.appspot.com',
  messagingSenderId: '488437473949',
  appId: '1:488437473949:web:d56098b92faeea043a2a74',
});

// var storage = firebase.storage();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;
