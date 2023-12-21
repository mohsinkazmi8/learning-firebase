
import './App.css';
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { app } from './firebase';
import Signup from './Pages/Signup';


  const auth = getAuth(app)



function App() {

 const signupUser = () => {
   createUserWithEmailAndPassword(auth, 
    'moshin123@gmail.com',
    'mohsin123',
    ).then((value) => console.log(value))
 }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Firebase</h1>
        <Signup/>
      </header>
    </div>
  );
}

export default App;
