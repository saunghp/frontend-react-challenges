import Cards from "./components/Cards";
import { useState } from "react";
import Profile from "./components/Profile";

function App() {

  //lifting stteup
  const [timeframe, setTimeframe] =useState("daily");

  return (
    <div className="w-screen min-h-screen bg-Navy-950 flex justify-center items-center">
      <div className="min-w-3xl max-w-5xl grid grid-cols-4 grid-rows-2 gap-4">
        {/* .item*7{item$} */}
        <div className="item bg-Navy-900 relative rounded-lg row-span-2">
          <Profile timeframe={timeframe} setTimeframe={setTimeframe} />
        </div>
        <Cards timeframe={timeframe} />
      </div>
    </div>
  );
}

export default App;
