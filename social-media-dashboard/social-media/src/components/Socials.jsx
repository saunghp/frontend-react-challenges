import React from 'react'
import data from '/data.json'
import Social from './Social'


function Socials() {
    console.log(data)
  return (
    
    <>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"> */}
        {data.socialProfiles.map((item,index)=>{
        return <Social key={index} item={item}/>;
    })}
    </div>
    
    </>
  )
}

export default Socials
