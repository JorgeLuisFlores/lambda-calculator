import React from "react";

const OperatorButton = props => {
  return (
    <button className={"OperatorButtons"} id={props.id}>
      {props.operator}
    </button>
  );
};

export default OperatorButton;
