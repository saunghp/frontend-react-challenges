import React from 'react'

function Profile() {

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
      <div className="p-4 bg-Navy-900 rounded-lg ">
        <ul className="grid gap-2 text-xs text-Navy-200">
          <li>
            Daily
          </li>
          <li>
            Weekly
          </li>
          <li>
            Monthly
          </li>
        </ul>
      </div>
    </>
  );
}

export default Profile;
