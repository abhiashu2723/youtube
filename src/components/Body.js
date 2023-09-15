import React from 'react'
import {Outlet} from "react-router-dom"
import Sidebar from './Sidebar'
// import MainContainer from './MainContainer'

function Body() {
  return (
    <div className=' grid grid-flow-col'>
      <Sidebar/>
      <Outlet />
    </div>
  )
}

export default Body
