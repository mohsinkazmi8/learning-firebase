import React, { useEffect, useState } from 'react'
import { useFirebase } from '../context/Firebase';
import BookCard from '../components/BookCard';

const Home = () => {

    const [books, setBooks] = useState([])

    const firebase = useFirebase();

    useEffect(()=>{
        firebase.listAllBooks().then((books) => setBooks(books.docs))
    },[])

  return (
    <>
        <div className="container mx-auto">
            <div className="grid mx-4 grid-cols-3  gap-5">
                {
                    books.map((book) =>(
                        <BookCard key={book.id} {...book.data()}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Home;
