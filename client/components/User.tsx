
import { useUsers } from '../hooks/useUser'
import { Link } from 'react-router-dom'
import NavBar from './Nav'

export function User() {
  const { data: users, isPending, isError } = useUsers()
  if (isPending) return <p>Loading..</p>
  if (isError) return <p>There was a error</p>
  if (!users) return null
  console.log(users)

  return (
    <div>
      <NavBar />
      <div
        className="hero min-h-screen bg-glass "
        style={{
          backgroundImage: 'url(images/background/background.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div>
            <div>There are the users</div>
            <div className="grid grid-cols-3 gap-4 px-10 mb-10">
              {users.map((user) => (
                <ul key={user.id}>
                  <div className="card bg-base-100 shadow-xl ">
                    <figure>
                      <img
                        src="images/userProfile/profile-admin.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        <strong>{user.name}</strong>
                      </h2>
                      <p>{user.email}</p>
                      <div key={user.id} className="card-actions justify-end">
                        <Link to={`/user/${user.id}`}> <div className="card-actions justify-end">
      <button className="btn btn-primary">Detail</button>
    </div></Link>
                      </div>
                    </div>
                  </div>
                  <div>{user.name}</div>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
//  {users.map((user, i) => (
//         <ul key={i} >
//         <div className="mt-3 artboard artboard-horizontal phone-1 text-xl">
//         <div>
//         <div className="card bg-base-100 w-96 shadow-xl">
//   <figure>
//     <img
//       src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{user.name}</h2>
//     <p>{user.location}</p>
//     <div className="card-actions justify-end">
//       <button  className="btn btn-primary">Details</button>
//     </div>
//   </div>
// </div>

//         </div>
//         </div>

//         </ul>
//       ))}
