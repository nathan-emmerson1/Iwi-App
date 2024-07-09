/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
// import App from './components/App'
// import  Layout  from './components/Layout'
import Home from './components/Home'
import { User } from './components/User'
import { Medical } from './components/Medical'

import UserWitMedical from './components/UserMedicalInfo'
import Layout from './components/Layout'

const router = createBrowserRouter(
  createRoutesFromElements([
    <>
      <Route path="/" element={<Layout />} />
      <Route index element={<Home />} />

      <Route path="/user" element={<User />} />
      <Route path="/user/:id" element={<UserWitMedical />} />

      <Route path="/medical" element={<Medical />} />
    </>,
  ]),
)

export default router
