import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Grid from "../components/Grid";
import AuthorCard from "../components/AuthorCard";
import { BASE_URL } from "../App";
import { NavLink } from "react-router-dom";
  
const Authors = () => {

    useEffect(() => {
        fetch(BASE_URL+'/authors')
        .then((res) => res.json())
        .then((res) => {
            setAuthorsList(res);
        })
        .catch((error) => {
        });  
    }, []);

    const [ authorsList, setAuthorsList ] = useState([]);

    let AuthorsGrid;
    if (authorsList.length) {
        AuthorsGrid = (
            <Grid>
                {authorsList.map(e => {
                    let full_name = `${e.first_name} ${e.last_name}`;
                    return (
                    <AuthorCard key={e._id} title={full_name} id={e._id}/>
                    );
                })} 
            </Grid>
        );
    } else {
        AuthorsGrid = (
            <Banner>
                Sorry, we were not able to find any authors &#128531;
            </Banner>
        );   
    }

    return (
        <div className="container mx-auto">

            <div className="my-10">
                <NavLink to="/author/add" 
                    className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 ml-4 text-white rounded focus:outline-none focus:shadow-outline active"  
                >
                    Add new author
                </NavLink>
            </div>
            {AuthorsGrid}
        </div>
    );

};

export default Authors;