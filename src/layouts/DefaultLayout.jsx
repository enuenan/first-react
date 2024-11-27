/* eslint-disable react/prop-types */

import Navbar from "../includes/Navbar"

export const DefaultLayout = ({ children }) => {
    return (
        <div className="bg-indigo-100 p-4 min-h-screen">
            <Navbar />
            <div className="container bg-white  p-6 mx-auto">
                {children}
            </div>
        </div>

    )
}
