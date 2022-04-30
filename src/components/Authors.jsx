import { useState, useEffect } from "react";
import Banner from "./Banner";

  
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
    console.log(authorsList);
    if (authorsList.length) {
        return (
            <div>        
            {authorsList.map(e => (
            <li key={e.last_name}>
                <p>{e.first_name}</p>
                <p>{e.last_name}</p>
            </li>
            ))} 
        </div>
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