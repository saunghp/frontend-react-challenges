import { useState } from 'react'

import React from 'react'
import Cards from './components\'/Cards'
import Profile from './components\'/Profile'    

const App = () => {
  return (
    <div className="w-screen min-h-screen bg-Navy-950 flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 min-w-3xl max-h-5xl w-32 ">
        <div className="item row-span-2">
          <Profile  />
        </div>
        <Cards/>

      </div>
      
    </div>
  )
}

export default App

