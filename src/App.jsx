import React from 'react'
import { useState } from 'react'
import './App.css'
import Sidebar from "./component/sidebar/sidebar"
import MainDash from './component/MainDashboard/mainDash'
import RightSide from './component/RightSide/RightSide'
function App() {

  return (
       <div className='App'>
          <div className='AppGlass'>
            <Sidebar/>
            <MainDash/>
            <RightSide/>
          </div>
          <div>
            
          </div>
       </div>
  )
}

export default App
