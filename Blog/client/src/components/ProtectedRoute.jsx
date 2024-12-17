import {Navigate} from "react-router-dom";
import CreatePost from "./CreatePost";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
const ProtectedRoute = () => {
    const {user} = useContext(AuthContext)
    return user ? <CreatePost/> : <Navigate to={"/login"}/>;
}


export default ProtectedRoute;