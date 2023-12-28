import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from '../firebase';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert('success'))
    };

    const signupWithGoogle = () =>{
      signInWithPopup(auth, googleProvider)
    }

  return (
    <>
      <h1>Sign Up</h1>
      <form>
        <div className="mb-3 row">
            <label for="staticEmail" className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-8">
            <input onChange={(e) => setEmail(e.target.value)} type="text" readonly className="form-control" id="staticEmail" value={email} required/>
            </div>
        </div>
        <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-4 col-form-label">Password</label>
            <div className="col-sm-8">
            <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} className="form-control" id="inputPassword" required/>
            </div>
        </div>

        <button onClick={signupWithGoogle} type="button" className="btn btn-primary me-2">Sign Up With Google</button>
        <button onClick={createUser} type="button" className="btn btn-info">Sign Up</button>
      </form>
    </>
  )
}

export default Signup
