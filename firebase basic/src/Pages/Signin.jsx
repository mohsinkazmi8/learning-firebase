import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { app } from '../firebase';

const auth = getAuth(app)

const Signin = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signinUser = () =>{
        signInWithEmailAndPassword(auth,email,password)
        .then(value => console.log("signin Success fully"))
        .catch((error) => console.log('error: ' + error))
    }

  return (
    <>
        <h1>Sign In</h1>
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
            <button onClick={signinUser} type="button" class="btn btn-info">Sign In</button>
        </form>
    </>
  )
}

export default Signin;
