import  { useState, useContext} from 'react';
import {NavLink, Link} from "react-router-dom"
import { AuthContext } from '../context/authcontext';
const Header = () => {
    const { loggedinUser, setLoggedinUser} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    console.log(loggedinUser);
    const handleLogout = () => {
        // Clear token from localStorage and update state
        localStorage.removeItem("token");
        setLoggedinUser(null)
    };
    

    return (
        <header className='shadow sticky z-50 top-0'>
            <nav className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white text-xl font-bold">MyBlog</div>
                <div className="text-white text-xl font-bold">
                    <Link to="/posts">Posts</Link>
                </div>
                <div className="text-white text-xl font-bold">
                    <Link to="/">Home</Link>
                </div>

                <div>
                    <NavLink to="/create" 
                    className="hidden md:flex items-center space-x-4 bg-slate-100 p-2 rounded-md hover:bg-slate-400 font-md"
                    >
                        Create Post +
                    </NavLink>
                </div>

                {/* Desktop Menu Items */}
                <div className="hidden md:flex items-center space-x-4">
                    { !loggedinUser && (
                <div>
                    <Link to="/login" className="text-white hover:bg-blue-700 px-4 py-2 rounded">Login</Link>
                    <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Sign Up</Link>
                </div>
                    )
                }
                    {loggedinUser && (
                <div className="hidden md:flex items-center space-x-4">
                    <p className="text-black bg-green-300 hover:bg-green-700 px-4 py-2 rounded">{loggedinUser}</p>
                    <button onClick={handleLogout} className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-400">Logout</button>
                </div>
            )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center bg-blue-700 py-2">
                    <Link to="/login" className="text-white hover:bg-blue-800 px-4 py-2 rounded mb-2">Login</Link>
                    <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Sign Up</Link>
                </div>
            )}
        </nav>
        </header>
    );
};

export default Header;
