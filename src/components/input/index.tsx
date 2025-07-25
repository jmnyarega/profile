import React from "react";
import "./input.css";

export interface Props extends React.ComponentPropsWithoutRef<"input"> {
  specialProp?: string;
}

const Input: React.FC<Props> = (props) => (
  <div className="input-wrapper">
    <input {...props} />
    <span> {props.placeholder} </span>
  </div>
);

export default Input;
