import React from "react";
import { GiLoveHowl } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full shadow-md  bg-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

                {/* Logo Section */}
                <Link to={`/`} className="flex items-center gap-2">
                    <div className="bg-yellow-600 text-white w-8 h-8 flex items-center justify-center rounded-md">
                        <GiLoveHowl/>
                    </div>
                    <h1 className="text-lg font-semibold text-gray-800">
                        ShaadiBio
                    </h1>
                </Link>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    <button className="text-gray-700 hover:text-black font-medium">
                        Login
                    </button>

                    <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-5 py-2 rounded-md font-medium transition">
                        Create Biodata
                    </button>
                </div>

            </div>
        </header>
    );
};

export default Header;