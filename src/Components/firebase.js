import { initializeApp,} from 'firebase/app';
import { getFirestore,} from 'firebase/firestore/lite';
import { getAuth,createUserWithEmailAndPassword} from 'firebase/auth';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6qsoXLLgpSqScTEsCM7VbPzx-SmDxmr0",
    authDomain: "clone-ec20d.firebaseapp.com",
    projectId: "clone-ec20d",
    storageBucket: "clone-ec20d.appspot.com",
    messagingSenderId: "670124457762",
    appId: "1:670124457762:web:e14a0eebdee63ef55baf7b",
    measurementId: "G-NCFN15869T"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();
  const create_user = createUserWithEmailAndPassword();
  export { db, auth, create_user};