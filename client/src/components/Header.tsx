import { useState } from 'react';
const Header = () => {
    // Function to handle authentication state added here later

    // Function to sign out of account added here later
    const handleSignOut = async () => {
       try {
        // send POST request to API for sign out
       } catch (err) {
        console.error('Network or server-side error: ', err); 
       }
    }

    return (
        <div className = "fixed top-0 left-0bg-transparent w-full flex shadow-md justify-between items-center p-6 z-50">
            {/* Left Side of Navbar */}
            <div className = "flex-grow flex justify-start items-center">
                <h1 className = "text-xl text-gray-800">Welcome to PrepTime!</h1>
            </div>

            {/* Center of Navbar */}
            <div className = "flex-none">
                <img src="/logo.png" alt="PrepTime Logo" className = "h-10 w-auto"/>
            </div>

            {/* Right Side of Navbar */}
            <div className = "flex-grow flex justify-end items-center space-x-4">
                {/* Needs conditional rendering later on. Currently adding all buttons needed to the Navbar and will fix later*/}
                <button
                    onClick = {handleSignOut}
                    className = "text-black rounded-md bg-white hover:bg-gradient-to-br from-yellow-100-to-orange-400 transition duration-300 px-4 py-2 font-medium"
                >Sign Out</button>
            </div>
        </div>
    )
}

export default Header;