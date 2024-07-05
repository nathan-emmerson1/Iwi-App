import { useUserMeicalInfo } from "../hooks/useUser"

function UserWitMedical(){
  const {data: user, isPending,isError} = useUserMeicalInfo()
  if(isPending) return <p>Loading..</p>
  if(isError) return <p>There was a error</p>
  console.log(user)
  return (
    <div>
    <div>{user.id}</div>
    <div>{user.ashma}</div>
    <div>{user.diabetes}</div>
    <div>{user.repo}</div>
    <div></div>

    </div>
  )
}
export default UserWitMedical