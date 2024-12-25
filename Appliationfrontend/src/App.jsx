import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";

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
            ]
    }])

    return (
        <RouterProvider router={router}>
                <Header/>
                {/* Define Routes Here */}
        </RouterProvider>
    );
}

export default App;
