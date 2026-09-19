import { useState } from 'react'
import './App.css'
import './index.css'
import Socials from './components/Socials'
import Overviews from './components/Overviews'

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode]= useState(false);
  
    return (
      <>

        <div className={`min-h-screen bg-bg ${isDarkMode ? 'dark':''}`}> 
          <div className="max-w-5xl mx-auto px-6 py-10">
              <div  className={`flex justify-between mb-4 text-text`}>
              <div >
                  <h2 className="text-2xl font-bold text-text ">Social Media Dashboard</h2>
                  <p className="text-text mb-4">Total Followers: 23,004</p>
                  
              </div>
        
              <div>
                <button onClick={()=>setIsDarkMode(!isDarkMode)}>
                  Dark Mode</button>
              </div>
            </div>
            <Socials />
            <h2 className="text-text font-bold text-2xl mt-4 mb-4  "> Overview - Today</h2>
            <Overviews />
          </div>
        </div>
    </>
  )
}

export default App
