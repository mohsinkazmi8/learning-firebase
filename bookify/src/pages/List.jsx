import React, { useState } from 'react';
import { useFirebase } from '../context/Firebase';



const List = () => {

    const firebase = useFirebase();

    const [name , setName] = useState('');
    const [isbnNo , setIsbnNo] = useState('');
    const [price , setPrice] = useState('');
    const [coverPic , setcoverPic] = useState('');


    const handleList = async (e) => {
        e.preventDefault();
       await firebase.handleCreateNewListing(name,isbnNo,price,coverPic)
       setName('');
       setIsbnNo('');
       setPrice('');
       setcoverPic(''); 
    }

  return (
    <>
        <div className="container mx-auto my-5">
            <form onSubmit={handleList}>
                <div className="grid grid-cols-5 gap-4">
                    <div className='col-span-3 col-start-2'>
                        <h1 className='text-indigo-400 text-4xl font-semibold'>Add a Book</h1>
                    </div>
                    <div className='col-span-3 col-start-2'>
                        <div className="text-black">Name</div>
                        <input required onChange={e => setName(e.target.value) } value={name} className='border p-1 mt-1 rounded w-full' type="text" placeholder='Name' />
                    </div>
                    <div className='col-span-3 col-start-2'>
                        <div className="text-black">ISBN Number</div>
                        <input required onChange={e => setIsbnNo(e.target.value)} value={isbnNo} className='border p-1 mt-1 rounded w-full' type="text" placeholder='ISBN Number' />
                    </div>
                    <div className='col-span-3 col-start-2'>
                        <div className="text-black">Price</div>
                        <input required onChange={e => setPrice(e.target.value)} value={price} className='border p-1 mt-1 rounded w-full' type="text" placeholder='Price' />
                    </div>
                    <div className='col-span-3 col-start-2'>
                        <div className="text-black">Cover Picture</div>
                        <input required onChange={e => setcoverPic(e.target.files[0])}  className='p-1 mt-1  w-full' type="file"  />
                    </div>
                    <div className='col-span-3 col-start-2'>
                        <button type='submit' className='bg-indigo-500 text-white rounded px-3 py-2 '>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default List
