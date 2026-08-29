import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'


const Profile = () => {

  const user =  useSelector((store)=>store.user);
  
  
  return (
    user && (
    <div>
      <p className="flex justify-center text-indigo-300">Your Profile View</p>
      <EditProfile user={user}/>
    </div>
  )
)
}

export default Profile
