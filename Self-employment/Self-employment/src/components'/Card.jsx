import React from 'react'


function Card() {
  return (
    <div className="bg-Blue-300 overflow-hidden relative z-10 rounded-lg "> 
    <img src="./images/icon-work.svg" alt="work" className=" w-14 absolute right-2 z-20 -top-2"/>
    <div className="bg-Navy-900 mt-10 relative z-30 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h3 className="text-white text-sm">Work</h3>
        <img src="./images/icon-ellipsis.svg" alt="Ellipsis" />
      </div>
      <h2 className="text-white text-4xl font-light mt-5 mb-2" >32hrs</h2>
      <p className="text-Navy-200 text-[10px] font-light" >Last Week -34hrs</p>
    </div>
      
    </div>
  )
}

export default Card;
