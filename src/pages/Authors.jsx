import Banner from "../components/Banner";
import Grid from "../components/Grid";
import AuthorCard from "../components/AuthorCard";
import { NavLink } from "react-router-dom";
import { useAuthors } from "../hooks/useAuthors";


const Authors = () => {

    const { authorsList } = useAuthors();

console.log(authorsList);
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
                Something went wrong &#128531;
                {authorsList.error}
            </Banner>
        );   
    } else {
        AuthorsGrid = (
        <Banner>
            {/* Loading data &#8987; */}
            Sorry, we were not able to find any authors &#128531;
        </Banner>
        );
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