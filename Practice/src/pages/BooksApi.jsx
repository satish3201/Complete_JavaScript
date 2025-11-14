import React, { useEffect, useState } from 'react'


const BooksApi = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books');
            console.log(response);
            const result = await response.json();
            console.log(result);
            setBooks(result);
            console.log(result)
        }
        fetchData();
    }, [])

    return (
        <div className="grid grid-col-4">
            <h5 className="text-xl text-center m-6 font-bold text-blue-600">Using Books  API  🎉</h5>
            {
                books.map((books) => (
                    <div>
                        <h2 className=''>{books.author_id}</h2>
                        <img src={books.cover_image} alt="" />
                        <p className='text-yellow-500' key={books.id}> books title===={books.title}</p>
                        <p className="text-blue-600">pages:{books.pages}</p>
                        <h3>booke releaseDate{books.releaseDate}</h3>
                        <p className="text-4xl font-bold text-purple-600">isbn{books.isbn}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default BooksApi


