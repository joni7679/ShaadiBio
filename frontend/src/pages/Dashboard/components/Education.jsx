import React from 'react'

const Education = () => {
    return (
        <>
            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg mb-4">
                    Education & Profession
                </h3>

                <div className="grid grid-cols-2 gap-4 text-sm">
                    <p><span className="text-gray-400">Highest Degree</span><br />M.Des in Interaction Design</p>
                    <p><span className="text-gray-400">University</span><br />National Institute of Design</p>
                    <p><span className="text-gray-400">Occupation</span><br />Senior Product Designer</p>
                    <p><span className="text-gray-400">Company</span><br />TechCorp India Pvt. Ltd.</p>
                    <p><span className="text-gray-400">Annual Income</span><br />24 LPA</p>
                    <p><span className="text-gray-400">Work Location</span><br />Mumbai, Maharashtra</p>
                </div>
            </div>

        </>
    )
}

export default Education