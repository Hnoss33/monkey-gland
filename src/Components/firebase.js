import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 apiKey: "AIzaSyAn_MD_5sXsa-8pwj7Oqnacv_gJoINEjvw",
 authDomain: "monkey-gland-e6657.firebaseapp.com",
 databaseURL: "https://monkey-gland-e6657.firebaseio.com",
 projectId: "monkey-gland-e6657",
 storageBucket: "monkey-gland-e6657.appspot.com",
 messagingSenderId: "890142011381",
 appId: "1:890142011381:web:9c39755af8002415a03abc",
 measurementId: "G-QD5E09TTRG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
