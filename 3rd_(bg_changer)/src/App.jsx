import { useState } from "react";
import "./App.css";
import ColorBtn from "./ColorBtn";

function App() {
  const colorBox = [
    { color: "RED", bg_color: "bg-red-700" },
    { color: "BLUE", bg_color: "bg-blue-700" },
    { color: "GREEN", bg_color: "bg-green-700" },
    { color: "YELLOW", bg_color: "bg-yellow-700" },
    { color: "ORANGE", bg_color: "bg-orange-700" },
    { color: "GRAY", bg_color: "bg-gray-700" },
  ];
  const [changeColor, setChangeColor] = useState("bg-blue-200");
  return (
    <>
      <div className={`${changeColor} h-screen w-screen absolute`}>
        <div className="bg-pink-400 relative top-96 inline-block rounded-xl left-96">
          {colorBox.map(({ color, bg_color }, idx) => (
            <ColorBtn setChangeColor={setChangeColor} key={idx} color={color} bg_color={bg_color} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
