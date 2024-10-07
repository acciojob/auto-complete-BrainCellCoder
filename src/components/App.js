import React, { useState } from "react";
import "./../styles/App.css";
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const App = () => {
  const [filterdFruits, setFilteredFruits] = useState(fruits);

  const handleInput = (e) => {
    const newArr = fruits.filter((fruit) => fruit.includes(e.target.value));
    setFilteredFruits(newArr);
  };
  return (
    <div>
      {/* Do not remove the main div */}
      <input type="text" onChange={(e) => handleInput(e)} />
      <ul>
        {filterdFruits.map((fruit, index) => {
          return <li key={index}>{fruit}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
