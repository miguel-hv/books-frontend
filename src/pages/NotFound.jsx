import Banner from "../components/Banner";
import { NavLink } from "react-router-dom";

const NotFound = () => {
    
    return (
        <Banner>
            <p>
                We could not find that page &#x1F615;
            </p>
            <p>
                <NavLink to="/" >Return Home</NavLink>
            </p>
        </Banner>
    );
}

export default NotFound;