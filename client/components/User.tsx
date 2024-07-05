import { useUsers } from '../hooks/useUser'

export function User() {
  const { data: users, isPending, isError } = useUsers()
  if (isPending) return <p>Loading..</p>
  if (isError) return <p>There was a error</p>
  console.log(users)
  return (
    <div>
      <div>This is the user profile</div>
      {users.map((user, i) => (
        <ul key={i}>
          <div>{user.email}</div>
          <div>{user.name}</div>
          <div>{user.location}</div>
          <div>{user.medicalRecordId}</div>
        </ul>
      ))}
      <div></div>
      <div></div>
    </div>
  )
}
