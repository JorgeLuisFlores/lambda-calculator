import React, { useState } from "react";
import data from "../../../data.js";
import SpecialButton from "./SpecialButton.js";

//import any components needed

//Import your array data to from the provided data file

const specials = data.specials;

const Specials = () => {
  const [special, setSpecial] = useState(specials);
  // STEP 2 - add the imported data to state

  return (
    <div>
      {specials.map(specialItem => {
        return <SpecialButton specials={specialItem} />;
      })}
    </div>
  );
};

export default Specials;
