import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="sm:text-center bg-slate-300 mt-20">
      <div className="flex justify-between flex-wrap mx-8 mt-5">
        <div className="py-3">
          <h3 className="text-xl font-medium m-1">Give us Feedback!</h3>
          <form >
            <label htmlFor="comment" className="text-md m-1">Leave a beautiful Comment</label>
            <input type="text"
              placeholder="Comment me"
              className="block m-1"/>
              <input type="submit" 
                value="Submit"
                className="bg-red-700 m-1 px-4 py-1 text-white outline-none"
                />
          </form>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl mt-5 font-semibold text-red-700">Routes</h3>
          <Link to="/" className="text-md hover:text-red-700">Home</Link>
          <Link to="/projects" className="text-md hover:text-red-700">Projects</Link>
          <Link to="/profile" className="text-md hover:text-red-700">Profile</Link>
          <Link to="/github" className="text-md hover:text-red-700">Github</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl mt-5 font-semibold text-red-700">About us</h3>
          <Link to="https://github.com/adeshsinghbits" target="blank" className="text-md hover:text-red-700">Github</Link>
          <Link to="https://www.instagram.com/adeshsinghsomwanshi/" target="blank" className="text-md hover:text-red-700">Instagram</Link>
          <Link to="https://www.youtube.com/@64-bitscode" target="blank" className="text-md hover:text-red-700">You Tube</Link>
          <Link to="/github" className="text-md hover:text-red-700">Linkdien</Link>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xl mt-5 font-semibold text-red-700">License</h3>
          <Link to="/" className="text-md hover:text-red-700">MIT License</Link>
          <Link to="/profile" className="text-md hover:text-red-700">Contributors</Link>
          <Link to="/projects" className="text-md hover:text-red-700">Terms & Condition</Link>
          <Link to="/github" className="text-md hover:text-red-700">Privacy & Policy</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer