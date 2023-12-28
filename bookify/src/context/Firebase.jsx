import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';

import {addDoc, collection, getDocs, getFirestore} from 'firebase/firestore';
import {getDownloadURL, getStorage , ref, uploadBytes} from 'firebase/storage';

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyCAlvQeDYmN5n6OrtESyeRjq_EoJZUdyZA",
    authDomain: "bookify-623b0.firebaseapp.com",
    projectId: "bookify-623b0",
    storageBucket: "bookify-623b0.appspot.com",
    messagingSenderId: "1008121738611",
    appId: "1:1008121738611:web:d12ee587912208bc834106"
  };

export const useFirebase = () => useContext(FirebaseContext);

const firebaseapp = initializeApp(firebaseConfig);

const FirebaseAuth = getAuth(firebaseapp);
const googleProvider = new GoogleAuthProvider();

const fireStore = getFirestore(firebaseapp);
const storage = getStorage(firebaseapp)

export const FirebaseProvider = (props) => {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    onAuthStateChanged(FirebaseAuth,(user)=>{
      if (user) {
        setUser(user);
      }else{
        setUser(null)
      }
    })
  },[])



    const signupWithEmailPassword = (email,password) =>createUserWithEmailAndPassword(FirebaseAuth,email,password);
    const loginWithEmailPassword = (email,password) =>signInWithEmailAndPassword(FirebaseAuth,email,password);
    const signinWithGoogle = () => signInWithPopup(FirebaseAuth,googleProvider);
    const isLogin = user ? true : false;

    const handleCreateNewListing = async (name, isbn, price, cover) => {
      const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
      const uploadResult = await uploadBytes(imageRef, cover);
      await addDoc(collection(fireStore, 'books'), {
        name,
        isbn,
        price,
        ImageURL: uploadResult.ref.fullPath,
        Email: user.email,
        DisplayName: user.displayName ,
        photoURL: user.photoURL,
      })
    }

    const listAllBooks = () =>{
      return getDocs(collection(fireStore, 'books'))
    }

    const getImageURL = (path) =>{
      return getDownloadURL(ref(storage,path))
    }

    return <FirebaseContext.Provider value={{
      signupWithEmailPassword,
      loginWithEmailPassword,
      signinWithGoogle,
      isLogin,
      handleCreateNewListing,
      listAllBooks,
      getImageURL,
    }} >{props.children}</FirebaseContext.Provider>
    
} 