/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
// import App from './components/App'
// import  Layout  from './components/Layout'
import  Home  from './components/Home'
import { User } from './components/User'
import { Medical } from './components/Medical'
import Nav from './components/Nav'
import UserWitMedical from './components/UserMedicalInfo'

const router = createBrowserRouter(
  createRoutesFromElements([
    <>
      {/* <Route path="/" element={<App />} /> */}
      {/* <Route path="/" element={<Layout />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
       <Route path="/user/medical" element={<UserWitMedical />} />

      <Route path="/medical" element={<Medical />} />
      <Route path="/nav" element={<Nav />} />
    </>,
  ]),
)

export default router
