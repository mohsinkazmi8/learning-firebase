
import './App.css';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { app } from './firebase';
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import { useEffect, useState } from 'react';


  const auth = getAuth(app)


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
      
        setUser(user)

      } else {
        setUser(null)
      }
    });

  }, [])

  if (user === null) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Firebase</h1>
          <Signup/>
          <Signin/>
        </header>
      </div>
    );

  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase</h1>
        <h2> Hello {user.email}</h2>
        <button onClick={() => signOut(auth) } type="button" className="btn btn-warning">Sign out</button>
      </header>
    </div>
  );
}

export default App;
