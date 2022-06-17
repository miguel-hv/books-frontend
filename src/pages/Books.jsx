import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import BookCard from "../components/BookCard";
import Grid from "../components/Grid";
import { BASE_URL } from "../App";
import { NavLink } from "react-router-dom";
  
const Books = ({ getBooks, booksList }) => {

    useEffect(() => {
        getBooks();
    }, []);


    let BooksGrid;
    if (booksList.length) {
        BooksGrid = (
            <Grid>
            {booksList.map(e => (
                <BookCard key={e._id} title={e.name} description={e.author} id={e._id}/>
            ))} 
        </Grid>
        );
    } else {
        BooksGrid = (
            <Banner>
                Sorry, we were not able to find any books &#128531;
            </Banner>
        );   
    }

    return (
        <div className="container mx-auto">
                    <div className="my-10">
            <NavLink to="/book/add" 
                className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 text-white rounded focus:outline-none focus:shadow-outline active"  
            >
                Add new book
            </NavLink>
        </div>
        {BooksGrid}


        </div>
    );

};

export default Books;