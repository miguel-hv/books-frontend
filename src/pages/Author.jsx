import { useDeleteAuthors } from "../hooks/useAuthors";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { useParams, useNavigate } from "react-router";
import { BASE_URL } from "../App";

  
const Author = () => {

    const [ author, setAuthor ] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(BASE_URL+'/author/'+id)
        .then((res) => res.json())
        .then((res) => {
            setAuthor(res);
        })
        .catch((error) => {
        });  
    }, []);
        
    const handleEdit = () => {
        const authorToEdit = {
            _id: id,
            first_name: author.first_name,
            last_name: author.last_name,
        }
        navigate("/author/add", { state: authorToEdit });
    }

    const deleteAuthor = () => {
        
        fetch(BASE_URL+'/author/'+id, {
            method: 'DELETE',
        })
        .then((res) => {
           console.log(res);
            navigate("/authors", { replace: true });
        })
        .catch((err) => {
            console.log(err);
        });  
    }   


    if (author) {
        return (
            <>
                <div className="ml-20 text-3xl">
                    <p>{author.first_name}</p>
                    <p>{author.last_name}</p>
                </div>
                <button 
                    className="ml-20 mt-10 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    onClick={deleteAuthor}>
                        Delete
                </button>
                <button 
                    className="ml-5 mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    onClick={handleEdit}>
                        Edit
                </button>
            </>
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