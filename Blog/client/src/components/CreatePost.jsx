// components/NewPostPage.js
import  { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/authcontext";
const CreatePost = () => {

    const { loggedinUser } = useContext(AuthContext)
    const [post, setPost] = useState({
        title: "",
        content: "",
        author: loggedinUser
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({
            ...prevPost,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const createPost = (data) => axios.post(`http://localhost:3001/create`, data);
            await createPost(post);
            navigate("/posts"); // Redirect to home page or blog list page after successful post creation
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div className="bg-slate-500 py-5">
        <div className="heading text-center font-bold text-2xl text-gray-800 pb-5">New Post</div>
            <form onSubmit={handleSubmit} className="">
                <div className="editor mx-auto w-10/12 flex flex-col bg-slate-500 text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
                <label htmlFor="title" className="my-2">Title</label>
                <input className="title bg-gray-100 border rounded-md border-gray-300 p-2 mb-4 outline-none" 
                    type="text"
                    name="title"
                    value={post.title}
                    onChange={handleChange}
                    required     
                    />
                    <label htmlFor="content" className="my-2">Content here ...</label>
                <textarea 
                    name="content"
                    value={post.content}
                    onChange={handleChange}
                    required
                    className="description rounded-md bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" 
                    placeholder="Describe everything about this post here"></textarea>
                     <div className="my-4 ">
                            <label className="mx-4 bg-slate-400 rounded-sm px-6 py-2 my-5">Author</label>
                            <input
                                type="text"
                                name="author"
                                value={loggedinUser}
                                // onChange={handleChange}
                                readOnly
                                required
                                className=" bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
                            />
                        </div>
                <div className="buttons flex">
                <div className="btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-white ml-auto rounded-md ">Cancel</div>
                    <button
                    type='submit'
                    className="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500"
                    >Post</button>
                </div>
                </div>
            </form>
            
        </div>
    );
};

export default CreatePost;


