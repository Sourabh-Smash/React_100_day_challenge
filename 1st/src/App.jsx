import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Item from "./Item";
function App() {
  const title = ["A", "B", "C"];
  const a = [
    ["Adam", "Alone", "Amin", "Anuj", "Adore"],
    ["Bet", "Bat", "Bhen", "Ballu", "Bhai"],
    ["Chotu", "Chadi", "Chart", "Chodu", "Chaval"],
  ];
  const [userInput, useUserInput] = useState("");
  console.log(userInput);

  return (
    <>
      <div className="container">
        <h1 className="center-align">My Contacts</h1>
        <input type="text" name="" onChange={(e)=>{useUserInput(e.target.value)}} id="filterInput" placeholder="Enter Input" />
        <ul id="names" className="collection with-header">
          {a.map((i,key) => {
            return (
              <>
                <Header key={key} head={title[key]} />
                {i.map((item,key2) => {
                  return <Item key={key2} name={item} userInput={userInput} />;
                })}
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
