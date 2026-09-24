import { Switch } from "@headlessui/react";
import { useState } from "react";
import "./App.css";
import "./index.css";
import Socials from "./components/Socials";
import Overviews from "./components/Overviews";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <div className={`min-h-screen bg-bg ${isDarkMode ? "dark" : ""}`}>
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className={`md:flex flex-row justify-between items-center mb-8 text-text`}>
    
            <div>
              <h1 className="text-2xl font-bold text-text ">
                Social Media Dashboard
              </h1>
              <p className="text-text mb-4">Total Followers: 23,004</p>
            </div>
            <hr className="mb-5 border-bg-text"></hr>

            <div className={"flex justify-between items-center gap-3"}>
              <span className="text-sm text-text font-bold">Dark Mode</span>

              <Switch
                checked={isDarkMode}
                onChange={setIsDarkMode}
                className={`group relative flex h-7 w-14 cursor-pointer rounded-full p-1 transition-colors
                  ${isDarkMode ? "bg-linear-to-r from-Blue-600 to-Green-500" : "bg-toggle"}`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none block bg-bg rounded-full size-5
                    ${isDarkMode ? "translate-x-7" : "translate-x-0"}
                    shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
              </Switch>
            </div>

            {/* <div>
                <button onClick={()=>setIsDarkMode(!isDarkMode)}>
                  Dark Mode</button>
              </div> */}
          </div>
          <Socials />
          <h2 className="text-text font-bold text-2xl mt-4 mb-4  ">
            {" "}
            Overview - Today
          </h2>
          <Overviews />
        </div>
      </div>
    </>
  );
}

export default App;
