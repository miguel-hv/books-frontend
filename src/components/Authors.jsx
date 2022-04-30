import { useState, useEffect } from "react";

  
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
            <h1 class="font-medium leading-tight text-5xl mt-20 pl-10">
                Sorry, we were not able to find any collection &#128531;
            </h1>
        );
    }

};

export default Authors;