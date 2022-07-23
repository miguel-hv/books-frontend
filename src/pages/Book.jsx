import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { useParams, useNavigate } from "react-router";
import { BASE_URL } from "../App";
  
const Book = () => {

    const [ book, setBook ] = useState();

        const { id } = useParams();
        const navigate = useNavigate();

  
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


    const deleteBook = () => {
        
        fetch(BASE_URL+'/book/'+id, {
            method: 'DELETE',
        })
        .then((res) => {
           console.log(res);
        navigate("/", { replace: true });
        })
        .catch((err) => {
            console.log(err);
        });  
    } 

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
            <>
                <div className="ml-20 text-3xl">
                    <p>{book.name}</p>
                    <p>{book.isbn}</p>
                    { Author }
                </div>
                <button 
                        className="ml-20 mt-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        onClick={deleteBook}>
                            Delete
                </button>
            </>
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