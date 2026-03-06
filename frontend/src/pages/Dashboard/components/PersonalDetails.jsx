import React from 'react'

const PersonalDetails = () => {
    return (
        <>
            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg mb-4">
                    Personal Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <p><span className="text-gray-400">Date of Birth</span><br />14th August, 1995</p>
                    <p><span className="text-gray-400">Time of Birth</span><br />08:30 AM</p>
                    <p><span className="text-gray-400">Height</span><br />5'11 (180 cm)</p>
                    <p><span className="text-gray-400">Blood Group</span><br />O Positive</p>
                    <p><span className="text-gray-400">Religion & Caste</span><br />Hindu, Kshatriya</p>
                    <p><span className="text-gray-400">Mother Tongue</span><br />Hindi</p>
                    <p><span className="text-gray-400">Marital Status</span><br />Never Married</p>
                    <p><span className="text-gray-400">Diet</span><br />Vegetarian</p>
                </div>
            </div>
        </>
    )
}

export default PersonalDetails