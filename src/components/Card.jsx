import React from "react";

function Card() {
  return (
    <div className="bg-Blue-300 overflow-hidden relative z-10 rounded-lg">
      <img
        src="/images/icon-work.svg"
        className="w-14 absolute right-2 z-20 -top-2"
        alt="Work"
      />
      <div className="bg-Navy-900 mt-10 relative z-30 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-white text-sm">Work</h3>
          <img src="/images/icon-ellipsis.svg" alt="icon" />
        </div>
        <h2 className="text-white text-4xl font-light mt-2 mb-3">32hrs</h2>
        <p className="text-Navy-200 text-xs font-light">Last Week - 36hrs</p>
      </div>
    </div>
  );
}

export default Card;
