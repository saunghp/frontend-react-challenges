import React from 'react'
import Overview from './Overview'
import data from "/data.json"

function Overviews() {
    console.log(data);
  return (
    <>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {data.overviewToday.map((item,index)=>{
            
        return <Overview key={index} item={item}/>;
    })}
    </div>
    </>
  )
}

export default Overviews
