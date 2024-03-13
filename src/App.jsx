import React from "react"
import HomePage from "./routes/Homepage/HomePage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Listpage from "./routes/listPage/Listpage"
import Layout from "./routes/LayOut/Layout"


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
        }
      ]
    }
  ])


  return (

    <RouterProvider router={router} />
  )
}

export default App
