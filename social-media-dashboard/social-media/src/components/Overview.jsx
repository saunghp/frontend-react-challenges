import React from "react";

function Overview({ item }) {
  const { label, value, change, media, isArrowUp } = item;
  return (
    <>
      <div>
        <div
          className="px-3 py-3 bg-bg-card rounded-md text-text 
        hover:bg-bg-card-hover cursor-pointer transition"
        >
          <div className="flex items-center justify-between ">
            <p className="text-sm font-bold text-text">{item.label}</p>
            <img src={item.media} alt="icon" className="w-5 h-5" />
          </div>
          <div className="flex items-end justify-between mt-6 ">
            <p className="text-2xl font-medium">{item.value}</p>
            <div
              className={`flex items-center gap-1 text-xs font-bold 
                ${item.isArrowUp ? "text-Green-500" : "text-Red-500"}`}
            >
              <img
                src={
                  item.isArrowUp
                    ? "/images/icon-up.svg"
                    : "/images/icon-down.svg"
                }
                alt="svg"
              />
              <p>{item.change}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
