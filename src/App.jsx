import Cards from "./components/Cards";

function App() {
  return (
    <div className="w-screen min-h-screen bg-Navy-950 flex justify-center items-center">
      <div className="min-w-3xl max-w-5xl grid grid-cols-4 grid-rows-2 gap-4">
        {/* .item*7{item$} */}
        <div className="item bg-Navy-900 relative rounded-lg row-span-2">
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
          <div className="p-3 flex flex-col gap-3 text-xs ml-2">
            <p className=" text-white">Daily</p>
            <p className=" text-white">Weekly</p>
            <p className="text-Navy-200">Monthly</p>
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
}

export default App;
