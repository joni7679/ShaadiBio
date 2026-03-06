import React from 'react'

const HoroscopeDetails = () => {
    return (
        <>
            <div className="bg-white rounded-xl shadow p-6">
                <h3 className="font-semibold text-lg mb-4">
                    Horoscope Details
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <p><span className="text-gray-400">Rasi</span><br />Leo (Simha)</p>
                    <p><span className="text-gray-400">Nakshatra</span><br />Magha</p>
                    <p><span className="text-gray-400">Manglik</span><br />No</p>
                    <p><span className="text-gray-400">Gotra</span><br />Kashyap</p>
                </div>
            </div>
        </>
    )
}

export default HoroscopeDetails