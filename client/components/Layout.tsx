import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavBar from './Nav'


function Layout() {
  return (
 
  <div>

  <div>
  <div>
  <NavBar />
  <Outlet />
  </div>
  
  
  
  </div>

  <Footer />
    
   
</div>



 

  
  
  )
}
export default Layout
