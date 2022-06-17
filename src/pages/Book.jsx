import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { useParams } from "react-router";
import { BASE_URL } from "../App";
  
const Book = () => {

        const { id } = useParams();
  
    useEffect(() => {
        fetch(BASE_URL+'/book/'+id)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setBook(res);
        })
        .catch((error) => {
        console.log(error)
        });  
    }, []);

    const [ book, setBook ] = useState();

    let Author;

    if(book && (book.author).length){
        Author = (
            book.author.map(e => ( 
                    <p key={e.last_name}>{e.first_name} {e.last_name}</p>
                ))
        );
    }

    if (book) {
        return (
            <div className="ml-20 text-3xl">
                <p>{book.name}</p>
                <p>{book.isbn}</p>
                { Author }
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