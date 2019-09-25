import React, { useState } from "react";
import data from "../../../data";
import OperatorButton from "./OperatorButton.js";

//import any components needed

//Import your array data to from the provided data file

const operators = data.operators;

const Operators = () => {
  const [operator, setOperator] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operators.map(operatorItem => {
        return <OperatorButton operator={operatorItem.char} />;
      })}
    </div>
  );
};

export default Operators;
