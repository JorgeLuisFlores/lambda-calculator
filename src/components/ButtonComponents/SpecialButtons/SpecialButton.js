import React from "react";

const SpecialButton = props => {
  return (
    <button className="SpecialsButton" id={props.id}>
      {props.specials}
    </button>
  );
};

export default SpecialButton;
