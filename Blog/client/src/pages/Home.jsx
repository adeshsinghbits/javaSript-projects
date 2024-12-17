import {Link} from 'react-router-dom'
import { AuthContext } from '../context/authcontext';
import { useContext } from 'react';
function Home() {
    const {user} = useContext(AuthContext)
  return (
  <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-16">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to My Blog</h1>
                <p className="mt-4 text-lg md:text-xl">
                    Explore the latest articles, insights, and stories from around the world.
                </p>
                <button className="mt-8 text-white font-semibold py-2 px-6 rounded-full shadow-lg  transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300 ">
                        {user &&
                            <p>Hello {user}</p>
                        }
                        {!user &&
                            <Link to="/signUp"> Sign Up</Link>
                        }
                </button>
            </div>
            <div>
                <h2 className="text-4xl font-medium mx-2 mt-10">Fullstack Web Development</h2>
                <h3 className="text-2xl font-medium mx-2 my-2">Blog Application</h3>
                <p className="text-lg font-medium mx-2 my-2">Post your blog with end to end encryption</p>
            </div>
        </div>
  )
}

export default Home