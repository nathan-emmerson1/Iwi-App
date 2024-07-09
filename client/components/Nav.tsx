import { Link } from 'react-router-dom'

function Nav() {
  return (
<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Take</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Log in</a></li>
      <li>
        <details>
          <summary>More</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <Link to={'/'}> <li>  <p>Home</p>  </li> </Link>
            <li><a>Log out</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}
export default Nav