import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex justify-around p-10 mb-20 bg-slate-200 text-3xl font-bold rounded" >
            <div>
                <NavLink to="/" 
                     className={({ isActive }) => (isActive ? 'text-purple-700' : 'inactive')}
                >
                    <p>Books</p>
                </NavLink>
            </div>
            <div>
                <NavLink to="/authors" 
                     className={({ isActive }) => (isActive ? 'text-purple-700' : 'inactive')}
                >
                    <p>Authors</p>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;