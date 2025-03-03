import React from 'react';
// import './Home.css';
import Topbar from '../../Topbar'
import { Outlet } from 'react-router-dom'
function Home() {
  return (
    <div>
      <Topbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default Home;