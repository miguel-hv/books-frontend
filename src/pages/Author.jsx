import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Grid from "../components/Grid";
import AuthorCard from "../components/AuthorCard";
import { useParams } from "react-router";

  
const Author = () => {

        const { id } = useParams();
  
    useEffect(() => {
        fetch('http://localhost:3001/author/'+id)
        .then((res) => res.json())
        .then((res) => {
            setAuthor(res);
        })
        .catch((error) => {
        });  
    }, []);

    const [ author, setAuthor ] = useState([]);

    if (author) {
        return (
            <div className="ml-20 text-3xl">
                <p>{author.first_name}</p>
                <p>{author.last_name}</p>
            </div>
        )
    } else {
        return (
            <Banner>
                Sorry, we were not able to find your desired author &#128531;
            </Banner>
        );
    }

};

export default Author;