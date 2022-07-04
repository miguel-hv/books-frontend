import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Grid from "../components/Grid";
import AuthorCard from "../components/AuthorCard";
import { BASE_URL } from "../App";
import { NavLink } from "react-router-dom";
import { useReducer } from "react";
  

const initialState = {
    loading: 1,
    error: '',
    success: false,
}

const reducer = (authorsList, action) => {
    switch(action.type){
        case 'LOADING': 
            return {
                loading: true,
                success: false,
                error: false,
            }
        case 'SUCCESS': 
            return {
                loading: false,
                success: action.payload,
                error: false,
            }
        case 'ERROR': 
            return {
                loading: false,
                success: false,
                error: true,
            }
        default:
            return authorsList
    }
}

const Authors = () => {
    // const [ authorsList, setAuthorsList ] = useState([]);
    const [authorsList, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch(BASE_URL+'/authors')
        .then((res) => res.json())
        .then((res) => {
            // setAuthorsList(res);
            dispatch({ type: 'SUCCESS', payload: res});
            
        })
        .catch((error) => {
            dispatch({ type: 'ERROR' });
        });  
    }, []);


    let AuthorsGrid;
    // if (authorsList.length) {
    if (authorsList.success) {
        console.log(authorsList.success);
        AuthorsGrid = (
            <Grid>
                {authorsList.success.map(e => {
                    let full_name = `${e.first_name} ${e.last_name}`;
                    return (
                    <AuthorCard key={e._id} title={full_name} id={e._id}/>
                    );
                })} 
                success
            </Grid>
        );
    } else if (authorsList.error) {
        AuthorsGrid = (
            <Banner>
                Sorry, we were not able to find any authors &#128531;
            </Banner>
        );   
    } else {
        <Banner>
            Loading data &#8987;
        </Banner>
    }

    return (
        <div className="container mx-auto">

            <div className="my-10">
                <NavLink to="/author/add" 
                    className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 text-white rounded focus:outline-none focus:shadow-outline active"  
                >
                    Add new author
                </NavLink>
            </div>
            {AuthorsGrid}
        </div>
    );

};

export default Authors;