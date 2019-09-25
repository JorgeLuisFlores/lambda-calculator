import React from "react";

const NumberButton = props => {
  return (
    <button className={"NumbersButtons"} id={props.id}>
      {props.number}
    </button>
  );
};

export default NumberButton;
