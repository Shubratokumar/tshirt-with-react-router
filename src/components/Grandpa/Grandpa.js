import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext("Golden");

const Grandpa = () => {
  // const house = 10;
  const [house, setHouse] = useState(1);

  const ornament = "Diamond Ring";

  const buyAHouse = () => {
    const newHouseCount = house + 1;
    setHouse(newHouseCount);
  };

  return (
    <RingContext.Provider value = {ornament}>
      <div className="grandpa">
        <h3>Grand pa</h3>
        <button onClick={buyAHouse}>Buy A House</button>
        <p>House : {house}</p>
        <div className="child">
          <Father ornament={ornament} house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
