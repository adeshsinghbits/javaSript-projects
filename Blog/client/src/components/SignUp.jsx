import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignUp = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate()
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/signup', formData);
            alert(response.data.message);
            navigate("/login")
        } catch (error) {
            alert(error.response?.data.message || 'Signup failed');
        }
    };

    return (
        <div className=" bg-slate-500 min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                        <h1 className="mt-6 text-center text-3xl leading-9 font-bold text-gray-900">Sign up</h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="name"
                            placeholder="Full Name" 
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete='off'
                        />
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete='off'
                            />
    
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete='off'
                            />
                        <button
                            type="submit"
                            className="w-full text-center py-3 rounded bg-green text-black bg-green-700 hover:bg-green-500 focus:outline-none my-1"
                        >Create Account</button>
                        
                    <div className="text-grey-dark mt-6">
                        Already have an account? 
                        <a className="no-underline border-b border-blue text-blue" href="../login/">
                            Log in
                        </a>.
                    </div>
                    </form>
                    </div>
                </div>
            </div>
    );
};

export default SignUp;
