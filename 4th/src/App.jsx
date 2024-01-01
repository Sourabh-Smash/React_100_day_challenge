import "./App.css";

function App() {
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 ">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            // value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
        </div>
      </div>
    </>
  );
}

export default App;
