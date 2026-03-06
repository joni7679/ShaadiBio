import React from 'react'
import Header from './components/Header'
import UserProfile from '../../components/UserProfile'
import PersonalDetails from './components/PersonalDetails'
import Education from './components/Education'
import FamilyDetails from './components/FamilyDetails'
import HoroscopeDetails from './components/HoroscopeDetails'

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='grid grid-cols-3 gap-6 px-8 py-8'>
        <UserProfile />
        <div className="col-span-2 space-y-6">
          <PersonalDetails />
          <Education />
          <FamilyDetails />
          <HoroscopeDetails />
        </div>
      </div>
    </>
  )
}

export default Dashboard
