// import firebase from 'firebase/compat/app';
// import 'firebase/auth';

// const firebaseConfig = {
//         apiKey: "AIzaSyArFanWkGGG1M-iInIpU_nsTkVKqzY3JfI",
//         authDomain: "gearbest-challenge.firebaseapp.com",
//         databaseURL: "https://gearbest-challenge-default-rtdb.asia-southeast1.firebasedatabase.app",
//         projectId: "gearbest-challenge",
//         storageBucket: "gearbest-challenge.appspot.com",
//         messagingSenderId: "914764071881",
//         appId: "1:914764071881:web:3804421106663bd867de18",
//         measurementId: "G-JRERWFFVHR"
// };


// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArFanWkGGG1M-iInIpU_nsTkVKqzY3JfI",
  authDomain: "gearbest-challenge.firebaseapp.com",
  projectId: "gearbest-challenge",
  storageBucket: "gearbest-challenge.appspot.com",
  messagingSenderId: "914764071881",
  appId: "1:914764071881:web:3804421106663bd867de18",
  measurementId: "G-JRERWFFVHR"
};
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };
// Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };