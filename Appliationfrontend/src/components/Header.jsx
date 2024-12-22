import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject, faHome, faUser,} from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-300 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap  justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <h1 className="text-xl font-medium hover:text-red-700">Adesh singh Bits</h1>
                    </Link>
                    <div
                        className="flex max-sm:hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col justify-between  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <FontAwesomeIcon icon={faHome}/>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <FontAwesomeIcon icon={faDiagramProject}/>
                                    Projects
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/profile"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <FontAwesomeIcon icon={faUser}/>
                                    Profile
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="https://github.com/adeshsinghbits" target="blank"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <button 
                        className="md:hidden absolute top-4 right-16  focus:outline-none"
                        onClick={toggleMenu}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            ></path>
                        </svg>
                </button>
                 {/* Mobile Menu */}
                {isOpen && (
                <div className="md:hidden animate-slide">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <FontAwesomeIcon icon={faHome}/>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/projects"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <FontAwesomeIcon icon={faDiagramProject}/>
                                    Projects
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/profile"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    <FontAwesomeIcon icon={faUser}/>
                                    Profile
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to="https://github.com/adeshsinghbits" target="blank"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                        </ul>
        </div>
)}
            </nav>
        </header>
    );
}

