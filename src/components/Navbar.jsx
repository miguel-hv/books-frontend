import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-around p-10 mb-20 bg-slate-200 text-3xl font-bold rounded" >
            <div>
                <NavLink to="/" 
                     className={({ isActive }) => (isActive ? 'text-purple-700' : 'inactive')}
                >
                    <h2>Books</h2>
                </NavLink>
            </div>
            <div>
                <NavLink to="/authors" 
                     className={({ isActive }) => (isActive ? 'text-purple-700' : 'inactive')}
                >
                    <h2>Authors</h2>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;