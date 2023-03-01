import './App.css'
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import SignInHome from './components/pages/SignIn/SignInHome'
import UserAccount from './components/pages/UserAccount/UserAccount';
import SignUpHome from './components/pages/SignUp/SignUpHome'

function App() {
  const router = createBrowserRouter([
    {path: "/", element: <SignInHome />},
    {path: "/user", element: <UserAccount />},
    {path: "/signup", element: <SignUpHome />}
  ]);
  return <RouterProvider router={router} />;

}

export default App
