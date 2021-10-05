// import firebase from "firebase";
// import "firebase/firestore";

// const firebaseapp = firebase.initializeApp({
//   apiKey: "AIzaSyCmoobjvIhrflq6cVN67F15uBrzs9R7UIc",
//   authDomain: "remoteworktracker.firebaseapp.com",
//   databaseURL: "https://remoteworktracker-default-rtdb.firebaseio.com",
//   projectId: "remoteworktracker",
//   storageBucket: "remoteworktracker.appspot.com",
//   messagingSenderId: "833315548291",
//   appId: "1:833315548291:web:04de8bb9ed49a74da37fb6",
// });

// const db = firebaseapp.firestore();
// export { db };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// import "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCmoobjvIhrflq6cVN67F15uBrzs9R7UIc",
//   authDomain: "remoteworktracker.firebaseapp.com",
//   databaseURL: "https://remoteworktracker-default-rtdb.firebaseio.com",
//   projectId: "remoteworktracker",
//   storageBucket: "remoteworktracker.appspot.com",
//   messagingSenderId: "833315548291",
//   appId: "1:833315548291:web:04de8bb9ed49a74da37fb6",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = app.firestore();

// export { db };

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyCmoobjvIhrflq6cVN67F15uBrzs9R7UIc",
  authDomain: "remoteworktracker.firebaseapp.com",
  databaseURL: "https://remoteworktracker-default-rtdb.firebaseio.com",
  projectId: "remoteworktracker",
  storageBucket: "remoteworktracker.appspot.com",
  messagingSenderId: "833315548291",
  appId: "1:833315548291:web:04de8bb9ed49a74da37fb6",
});

const db = firebaseapp.firestore();
export { db, firebaseapp };
