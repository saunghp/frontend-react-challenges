import React from "react";
import Card from "./Card";
import data from "/data.json";   

function Cards({timeframe}) {    
  return (
    <>
    {
      data.map((item, index) => {
        return <React.Fragment key={index}>
          <Card
            title={item.title}
            timeframes={item.timeframes}
            timeframeState={timeframe}
          />  

        </React.Fragment>
      })
    }  
      
    </>
  );
}

export default Cards;
