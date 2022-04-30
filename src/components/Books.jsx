import { useState, useEffect } from "react";
import Banner from "./Banner";
import Card from "./Card";

  
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
                <li key={e._id}>
                    <Card title={e.name} description={e.author} id={e._id}/>
                </li>
                ))} 
            </div>
        );
    } else {
        return (
            <Banner>
                Sorry, we were not able to find any books &#128531;
            </Banner>
        );
    }

};

export default Books;