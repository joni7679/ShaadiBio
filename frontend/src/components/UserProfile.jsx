import { LocateFixed, Mail, PhoneCall } from 'lucide-react'
import React from 'react'

const UserProfile = () => {
    return (
        <>
            <div className="bg-white rounded-xl shadow p-4 h-[350px]">
                <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                    className="rounded-lg mb-4"
                />
                <h2 className="text-xl font-semibold">Aditya Verma</h2>
                <p className="text-gray-500 mb-4">Senior Product Designer</p>
                <div className="space-y-2 text-gray-600 text-sm">
                    <p><LocateFixed  className='inline-block'/> Mumbai, Maharashtra</p>
                    <p><PhoneCall className='inline-block' /> +91 98765 43210</p>
                    <p><Mail className='inline-block' /> aditya.verma@example.com</p>
                </div>
            </div>
        </>
    )
}

export default UserProfile