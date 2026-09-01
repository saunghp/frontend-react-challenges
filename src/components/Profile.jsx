import React from "react";

const timeframeOptions = [
  { id: 1, label: "Daily", value: "daily" },
  { id: 2, label: "Weekly", value: "weekly" },
  { id: 3, label: "Monthly", value: "monthly" },
];
function Profile({ timeframe, setTimeframe }) {
  console.log(timeframe);
  return (
    <>
      <div className="bg-Purple-600 rounded-lg p-5 h-10/14">
        <img
          src="/images/image-jeremy.png"
          className=" bg-Purple-600 w-15 h-15 rounded-full border-2 border-white mb-3"
          alt="Jeremy Robson"
        />
        <h3 className="text-Navy-200 text-sm">Report for</h3>
        <h3 className="text-white text-3xl font-light">Jeremy</h3>
        <h3 className="text-white text-3xl font-light"> Robson</h3>
      </div>
      <div className="p-6">
        <ul className=" grid gp-3">
          {timeframeOptions?.map((option) => {
            const isActive = timeframe === option.value;
            const textColor = isActive ? "text-white" : "text-Navy-200";

            return (
              <li
                onClick={() => setTimeframe(option.value)}
                key={option.id}
                className={`${textColor} text-sm `}
              >
                {option.label}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Profile;
