import React from 'react'
import Overview from './Overview'
import data from "/data.json"

function Overviews() {
    console.log(data);
  return (
    <>
    <div className="grid grid-cols-4 grid-rows-2 gap-6">
        {data.overviewToday.map((item,index)=>{
            
        return <Overview key={index} item={item}/>;
    })}
    </div>
    </>
  )
}

export default Overviews
