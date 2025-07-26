import React from "react";

export interface Props extends React.ComponentPropsWithoutRef<"button"> {
  specialProp?: string;
}

const Button: React.FC<Props> = (props) => (
  <button {...props}>
    {props.children}
  </button>
);

export default Button;
