import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCAKdFNelxJw37X3UJgWRc9KEv6pAl3x_4",
  authDomain: "e-library-cece3.firebaseapp.com",
  projectId: "e-library-cece3",
  storageBucket: "e-library-cece3.appspot.com",
  messagingSenderId: "545014595769",
  appId: "1:545014595769:web:08892a4b10ebed22ae5b68"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
