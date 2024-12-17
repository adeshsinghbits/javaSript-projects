import {Navigate} from "react-router-dom";
import CreatePost from "./CreatePost";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
const ProtectedRoute = () => {
    const {loggedinUser} = useContext(AuthContext)
    return loggedinUser ? <CreatePost/> : <Navigate to={"/login"}/>;
}


export default ProtectedRoute;