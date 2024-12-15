import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/projects",
                    element: <Projects/>
                },
                {
                    path: "/profile",
                    element: <Profile/>
                },
                {
                    path:"/login",
                    element: <Login/>
                },
                {
                    path: "/signUp",
                    element: <SignUp/>
                }
            ]
    }])

    return (
        <RouterProvider router={router}>
                <Header/>
                {/* Define Routes Here */}
                <div>adesh</div>
        </RouterProvider>
    );
}

export default App;
