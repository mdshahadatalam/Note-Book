import React from 'react'
import { Nav } from '../compnent/menubar'
import { Outlet } from 'react-router-dom'

export const RootLayouts = () => {
  return (
    <div>
      <Nav/>
      <Outlet/>
    </div>
  )
}
