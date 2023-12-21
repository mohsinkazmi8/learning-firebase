import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from '../firebase';

const auth = getAuth(app);

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert('success'))
    };

  return (
    <>
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
        <button onClick={createUser} type="button" class="btn btn-info">Sign Up</button>
      </form>
    </>
  )
}

export default Signup
