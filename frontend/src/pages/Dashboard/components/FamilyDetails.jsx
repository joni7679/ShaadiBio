import React from 'react'

const FamilyDetails = () => {
    return (
        <>
            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg mb-4">
                    Family Details
                </h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <p><span className="text-gray-400">Father's Name</span><br />Rajendra Verma</p>
                    <p><span className="text-gray-400">Father's Occupation</span><br />Business Owner</p>
                    <p><span className="text-gray-400">Mother's Name</span><br />Sunita Verma</p>
                    <p><span className="text-gray-400">Mother's Occupation</span><br />Homemaker</p>
                    <p><span className="text-gray-400">Siblings</span><br />1 Younger Sister</p>
                    <p><span className="text-gray-400">Family Type</span><br />Nuclear Family</p>
                    <p><span className="text-gray-400">Family Values</span><br />Moderate</p>
                    <p><span className="text-gray-400">Hometown</span><br />Jaipur</p>
                </div>
            </div>
        </>
    )
}

export default FamilyDetails