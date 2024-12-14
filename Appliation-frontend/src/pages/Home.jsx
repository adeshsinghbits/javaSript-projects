import AdminProfile from "../assets/Small-Projects.png"

function Home() {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-wrap relative mb-5  px-10 py-5 rounded-md">
            <div >
                <img src={AdminProfile} alt="Not Found" />
            </div>
            <div className="p-5 text-right">
                <h2 className="text-4xl font-bold ">Welcome to My website <span className="block font-medium py-5">64 bits coder</span></h2>
                <button className="px-3 py-2 bg-red-700 font-medium text-xl rounded-sm hover:bg-transparent border-2 border-transparent hover:border-black">Visit Github</button>
            </div>
            </div>
            <div className="text-center my-5">
                <h3 className="text-3xl font-bold">Mini Project</h3>
                <p className="text-md font-sans m-3">I am FullStack developer See all my project here </p>
                <button className="px-3 py-2 bg-red-700 font-medium text-xl rounded-sm hover:bg-transparent border-2 border-transparent hover:border-black" ><a href="/projects">Projects</a></button>
            </div>
        </div>
    )
}

export default Home