import React from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import { Outlet } from 'react-router-dom'
import "../LayOut/Layout.scss"

function Layout() {
    return (
        <div className="LayoutApp">
            <div className="Navbar" >
                <Navbar />
            </div>
            <div className="Content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout