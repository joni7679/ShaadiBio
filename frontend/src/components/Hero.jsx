import React from "react";
import { GiLoveHowl } from "react-icons/gi";

const Hero = () => {
    return (
        <section className="bg-gray-100 py-28">
            <div className="max-w-5xl mx-auto text-center px-6">

                {/* Top Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full mb-6">
                    <GiLoveHowl/> The Modern Way to Share Your Profile
                </div>

                {/* Heading */}
                <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
                    Create Beautiful Marriage <br /> Biodata in Minutes
                </h1>

                {/* Description */}
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10">
                    Craft elegant, professional, and personalized marriage biodatas that
                    make a lasting impression. Choose from our curated collection of
                    premium templates.
                </p>

                {/* Buttons */}
                <div className="flex justify-center gap-4">
                    <button className="bg-[#c59b5f] hover:bg-[#b48a4d] text-white px-6 py-3 rounded-lg font-medium">
                        Create Biodata Now
                    </button>

                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200">
                        Explore Templates
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Hero;