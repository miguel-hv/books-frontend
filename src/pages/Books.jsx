import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import BookCard from "../components/BookCard";
import Grid from "../components/Grid";
import { BASE_URL } from "../App";
  
const Books = () => {

    useEffect(() => {
        fetch(BASE_URL+'/books')
        .then((res) => res.json())
        .then((res) => {
            setBooksList(res);
        })
        .catch((error) => {
        });  
    }, []);

    const [ booksList, setBooksList ] = useState([]);
    if (booksList.length) {
        return (
            <div className="container mx-auto">

                <Grid>
                    {booksList.map(e => (
                        <BookCard key={e._id} title={e.name} description={e.author} id={e._id}/>
                    ))} 
                </Grid>
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