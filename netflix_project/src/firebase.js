import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,getAuth,signInWithEmailAndPassword} from "firebase/auth";
import { addDoc, getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBUWf0IAQp3IUjRd2rNPh7bLhIjY2Xr-kk",
    authDomain: "netflixswe-c358c.firebaseapp.com",
    projectId: "netflixswe-c358c",
    storageBucket: "netflixswe-c358c.firebasestorage.app",
    messagingSenderId: "981809319768",
    appId: "1:981809319768:web:a010bfa3ee0dc147b51f2d"
  };
  
  
  const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup = async (name,email,password)=>{
    try{
       const res = await createUserWithEmailAndPassword(auth,email,password);
       const user =res.user;
       await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider: "local",
        email,
       })
    }
    catch(error){
        console.log(error);
        alert(error);

    }

}

const login=async(email,password)=>{
    try{
     await signInWithEmailAndPassword(auth,email,password)
    }
    catch(error){
        console.log(error);
        alert(error);

    }

}
const logout=()=>{
    signOut(auth);
}

export {auth,db,login,signup,logout};
