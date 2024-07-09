import React from 'react-router-dom'
import { useParams } from "react-router-dom"
import { useUserMeicalInfo } from "../hooks/useUser"


function UserWitMedical(){
  const {id} = useParams()
  
  
  const {data: user, isPending,isError} = useUserMeicalInfo(Number(id))
  if(isPending) return <p>Loading...</p>
  if(isError) return <p>There was a error</p>

  const formatBoolean = (text: boolean) => (text ? "Yes": "No")

  console.log(user)
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(/images/background/background.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    
    <div className="mt-3 artboard artboard-horizontal phone-1 text-xl">
    <div className="avatar">
  <div className="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
<p>{user.medicalId}</p>
    <p>Name:{user.name}</p>
    <p>Location:{user.location}</p>
    <p>Diabetes:{formatBoolean(user.diabetes)}</p>
    <div>Ashma:{formatBoolean(user.ashma)}</div>
    <div className=" text-nowrap ">Repository issues:{formatBoolean(user.repo)}</div>

    </div>
  </div>
</div>
  )
}
export default UserWitMedical