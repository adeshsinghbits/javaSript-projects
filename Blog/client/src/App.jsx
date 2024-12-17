import SignUp from './components/SignUp';
import Login from './components/Login'
import Layout from './pages/Layout';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import ProtectedRoute from './components/ProtectedRoute';
import PostList from './components/PostList';
import { UserProvider } from './context/authcontext';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
        {   
            path: "/",
            element: <Home/>
        },
        {
            path: "/signup",
            element: <SignUp/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/posts",
            element: <PostList/>
        },
        {
            path: "/create",
            element: <ProtectedRoute/>
        }
    ]
    }
])

function App() {
    return (
        <UserProvider>
            <RouterProvider router={router}/>
        </UserProvider>
    );
}

export default App;
