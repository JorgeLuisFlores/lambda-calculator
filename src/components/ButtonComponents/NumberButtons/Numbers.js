import React, { useState } from "react";
import data from "../../../data.js";
import NumberButton from "./NumberButton.js";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders.
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

const numbers = data.numbers;

const Numbers = () => {
  const [number, setNumber] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {numbers.map(numberItem => {
        return <NumberButton number={numberItem} />;
      })}
    </div>
  );
};

export default Numbers;
