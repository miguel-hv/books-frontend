import { useState, useEffect } from "react";
import Banner from "./Banner";
import Grid from "./Grid";
import Card from "./Card";

  
const Authors = () => {

    useEffect(() => {
        fetch('http://localhost:3001/authors')
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            setAuthorsList(res);
        })
        .catch((error) => {
        console.log(error)
        });  
    }, []);

    const [ authorsList, setAuthorsList ] = useState([]);

    if (authorsList.length) {
        return (
            <Grid>
                {authorsList.map(e => {
                    let full_name = `${e.first_name} ${e.last_name}`;
                    return (
                    <Card key={e._id} title={full_name}/>
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