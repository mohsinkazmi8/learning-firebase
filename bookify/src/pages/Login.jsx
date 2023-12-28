import React, { useEffect, useState } from 'react';
import {useFirebase} from "../context/Firebase";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login = () => {
    
    const firebase = useFirebase();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault();
       await firebase.loginWithEmailPassword(email,password)
    }

    const navigate = useNavigate();

    useEffect(()=>{
      if (firebase.isLogin) {
        navigate('/')
      }
    },[])

    console.log(firebase.isLogin)


  return (
    <>
      <div className="container mx-auto my-5">
        <form onSubmit={handleRegister}>
            <div className="grid grid-cols-5 gap-4">
                <div className='col-span-3 col-start-2'>
                    <h1 className='text-indigo-400 text-4xl font-semibold'>Login</h1>
                </div>
                <div className='col-span-3 col-start-2'>
                    <div className="text-black">Email</div>
                    <input onChange={e => setEmail(e.target.value) } value={email} className='border p-1 mt-1 rounded w-full' type="email" placeholder='Enter Your Email' />
                </div>
                <div className='col-span-3 col-start-2'>
                    <div className="text-black">Password</div>
                    <input onChange={e => setPassword(e.target.value)} value={password} className='border p-1 mt-1 rounded w-full' type="Password" placeholder='Password' />
                </div>
                <div className='col-span-3 col-start-2'>
                    <button type='submit' className='bg-indigo-500 text-white rounded px-3 py-2 '>Login</button>
                </div>
            </div>
        </form>
        <button onClick={firebase.signinWithGoogle} className='bg-indigo-500 text-white rounded px-3 py-2 '>Sign In With Google</button>
      </div>
    </>
  )
}

export default Login
