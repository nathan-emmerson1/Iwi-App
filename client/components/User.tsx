import { useUsers } from '../hooks/useUser'

export function User() {
  const { data: user, isPending, isError } = useUsers()
  if (isPending) return <p>Loading..</p>
  if (isError) return <p>There was a error</p>
  console.log(user)
  return (
    <div>
      <div>This is the user profile</div>
      
      <div></div>
      <div></div>
    </div>
  )
}
