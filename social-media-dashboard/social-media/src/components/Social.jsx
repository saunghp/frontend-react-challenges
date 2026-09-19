import React from "react";

function Social({ item }) {
  const { handles, followers, type, changeToday } = item;
  console.log(item);
  return (
    <div>
      <div
        className={`bg-bg-card px-4 py-8 text-text border-t-4 
        ${item.border} items-center flex flex-col text-center rounded-md 
        hover:bg-bg-card-hover cursor-pointer transition`}
      >
        <div className="flex items-center gap-3 ">
          <img src={item.media} alt="icon" className="p-0.5" />
          <p className="p-0.5">{item.handle}</p>
        </div>
        <div className="p-4">
          <p className="font-bold text-3xl ">{item.followers}</p>
          <p>{item.type}</p>
        </div>
        <div
          className={`flex items-center gap-1 
          ${item.isArrowUp ? "text-Green-500" : "text-Red-500"}`}
        >
          <img
            src={
              item.isArrowUp ? "/images/icon-up.svg" : "/images/icon-down.svg"
            }
            alt="Arrow"
          />
          <p>{item.changeToday}</p>
          <p>Today</p>
        </div>
      </div>
    </div>
  );
}

export default Social;
