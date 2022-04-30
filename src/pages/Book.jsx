import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { useParams } from "react-router";

  
const Book = () => {

        const { id } = useParams();
  
    useEffect(() => {
        fetch('http://localhost:3001/book/'+id)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setBook(res);
        })
        .catch((error) => {
        console.log(error)
        });  
    }, []);

    const [ book, setBook ] = useState([]);
    console.log(book);
    console.log(book.author);

    if (book) {
        return (
            <div className="ml-20 text-3xl">
                <p>{book.name}</p>
                <p>{book.isbn}</p>
                { book.author.map(e => ( 
                    <p>{e.first_name} {e.last_name}</p>
                ))}
            </div>
        )
    } else {
        return (
            <Banner>
                Sorry, we were not able to find your desired book &#128531;
            </Banner>
        );
    }

};

export default Book;