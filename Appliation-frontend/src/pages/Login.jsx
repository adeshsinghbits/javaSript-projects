
function Login() {
    return (
    <div className="flex justify-center bg-gradient-to-r from-orange-600 to-red-600">
        <div className="rounded-md shadow-lg shadow-black m-5 mt-10 w-80">
            <h2 className="text-center text-3xl font-medium text-white p-3">Login</h2>
            <form action=""
            className="flex flex-col p-2"
            >
                <label htmlFor="email"
                className="mt-5 mb-2 text-white text-lg mx-2"
                >Email or Username</label>
                <input type="text"
                    id="email"
                    autoComplete="off"
                    placeholder="enter Email or Password"
                    className="rounded-3xl bg-transparent border-2 border-gray-300 outline-none p-2"
                    />
                <label htmlFor="pass"
                    className="mt-5 mb-2 text-white text-lg mx-2"
                    >Password</label>
                <input type="password"
                    id="pass" 
                    placeholder="Enter a password" 
                    className="rounded-3xl bg-transparent border-2 border-gray-300 outline-none p-2"
                    />
                <a href="#"
                    className="mt-5 mb-2 text-right text-white text-md mx-2"
                    >forget Password?</a>
                <input
                    type="submit" 
                    value="Login" 
                    className="cursor-pointer border-2 border-gray-400 py-2 rounded-3xl mx-10 my-3 text-md font-bold"
                    />
            </form>
        </div>
    </div>
    )
}

export default Login