import { useDeleteAuthors } from "../hooks/useAuthors";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import { useParams, useNavigate } from "react-router";
import { BASE_URL } from "../App";

  
const Author = () => {

        const { id } = useParams();
        const navigate = useNavigate();
        // const history = useLocation();

        
        
    const deleteAuthor = () => {
        console.log("delete");
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
  
    useEffect(() => {
        fetch(BASE_URL+'/author/'+id)
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