import React from "react"
import HomePage from "./routes/Homepage/HomePage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Listpage from "./routes/listPage/Listpage"
import Layout from "./routes/LayOut/Layout"
import Login from "./routes/loginPage/Login"
import Singlepage from "./routes/singlePage/Singlepage"
import ProfilePage from "./routes/profilePage/ProfilePage"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path:"/list",
          element:<Listpage/>
        },
        {
          path:"/login",
          element:<Login />
        },
        {
          path:"/:id",
          element:<Singlepage />
        },
        {
          path:"/profile",
          element:<ProfilePage />
        }
      ]
    }
  ])


  return (

    <RouterProvider router={router} />
  )
}

export default App
