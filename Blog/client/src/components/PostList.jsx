import  { useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../context/authcontext';
function SearchById() {
    const [searchId, setSearchId] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const {user} = useContext(AuthContext)
  const handleSearch = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/search/${searchId}`);
        setResult(response.data);
        setError(null);
      } catch (err) {
        setError(err.response ? err.response.data.message : 'Error occurred');
        setResult(null);
      }
    };

    const [posts, setPosts] = useState([]);  
    
    
    useEffect(() => {
        const getPosts = () => axios.get(`http://localhost:3001/create`);
        getPosts().then((response) => {
            setPosts(response.data); 
            
          
        })
    }, []);
  
    const deletePost = async (id) => {
      try {
          const token = (localStorage.getItem('token'));
          await axios.delete(`http://localhost:3001/create/${id}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
          setPosts(posts.filter(post => post.id !== id));
      } catch (error) {
          console.log(error);
        }
    };

  
    

    return (
    <div className=' text-center  bg-slate-500  py-6 h-full'>
        <input
            type="text"
            placeholder="Enter What to search"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="px-3 py-2 rounded-l-md text-gray-700 focus:outline-none"
        />
        <button onClick={handleSearch}
        className="px-3 py-2 rounded-r-md text-white bg-black focus:outline-none"
        >Search</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result && (<h2 className='text-left mx-5 bg-slate-200 w-36 py-3 px-2 rounded-lg'>From your Search</h2>)}
        
        {result && (
        <div className=" flex flex-wrap gap-10 my-5 mx-5 text-left ">
            <div className="bg-gray-300 p-4 shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <p className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{result.title}</p>
            <p className="font-normal text-gray-700 mb-3">{result.content}</p>
            <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">{result.author}</p>
        </div>
        </div>
        )}
        {!result && (
        

    <div className=" flex flex-wrap gap-10 my-5 mx-5  overflow-hidden">
        {posts.map((data) => (
            <div key={data.id} className="bg-gray-300 p-4 shadow-lg border border-gray-200 rounded-lg max-w-md mb-5" >
                <h2 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{data.title}</h2>
                <p className="font-normal text-gray-700 mb-3 text-justify">{data.content}</p>
                <p className="text-white bg-blue-700 hover:bg-blue-800 shadow-lg font-medium rounded-lg text-md px-7 py-2 inline-flex text-right mr-10 ">{data.author}</p>
              {data.author === user && (
                  <button onClick={() => deletePost(data.id)}
                  className='ml-40 text-black bg-red-400 hover:bg-red-600 font-medium rounded-lg text-md px-3 py-2 shadow-lg'
                  >Delete</button>
              )

              }
              </div>
            ))}
        </div>
    )
        }
        </div>
    );
}

export default SearchById;
