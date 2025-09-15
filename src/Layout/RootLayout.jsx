import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Pages/shared/Navber/navber'
import Footer from '../Pages/Shared/Footer/Footer'
export default function RootLayout() {
  return (
    <div>
   <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
