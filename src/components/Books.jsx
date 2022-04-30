import { useState, useEffect } from "react";

  
const Books = () => {

    useEffect(() => {
        fetch('http://localhost:3001/books')
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setBooksList(res);
        })
        .catch((error) => {
        console.log(error)
        });  
    }, []);

    const [ booksList, setBooksList ] = useState([]);
    console.log(booksList);
    if (booksList.length) {
        return (
            <div>        
            {booksList.map(e => (
            <li key={e.isbn}>
                <p>{e.name}</p>
                <p>{e.author}</p>
                <p>{e.isbn}</p>
            </li>
            ))} 
        </div>
        );
    } else {
        return (
            <h1 class="font-medium leading-tight text-5xl mt-20 pl-10">
                Sorry, we were not able to find any collection &#128531;
            </h1>
        );
    }

};

export default Books;