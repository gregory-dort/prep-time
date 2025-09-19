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
        <div className = "fixed top-0 left-0 bg-gray-200/50 w-full flex shadow-md justify-between items-center p-4 z-50">
            {/* Left Side of Navbar */}
            <div className = "w-1/3 flex justify-start items-center">
                <h1 className = "text-xl text-gray-800">Welcome to PrepTime!</h1>
            </div>

            {/* Center of Navbar */}
            <div className = "flex-none w-1/3 flex justify-center">
                <img src="/images/preptime-logo.png" alt="PrepTime Logo" className = "h-20 w-auto max-w-full"/>
            </div>

            {/* Right Side of Navbar */}
            <div className = "w-1/3 flex justify-end items-center space-x-4">
                {/* Needs conditional rendering later on. Currently adding all buttons needed to the Navbar and will fix later*/}
                <button
                    onClick = {handleSignOut}
                    className = "text-black px-4 py-2 font-medium rounded-md bg-amber-100 hover:bg-gradient-to-r from-yellow-100 to-orange-300 transition ease-in-out duration-1000"
                >Sign Out</button>
            </div>
        </div>
    )
}

export default Header;