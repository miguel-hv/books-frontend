import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Grid from "../components/Grid";
import AuthorCard from "../components/AuthorCard";
import { BASE_URL } from "../App";
  
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

    if (authorsList.length) {
        return (
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
        return (
            <Banner>
                Sorry, we were not able to find any authors &#128531;
            </Banner>
        );
    }

};

export default Authors;