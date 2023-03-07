import React, { Children, ReactNode } from "react";

import "./Card.css";

// export enum Directions {
//   up,
//   right,
//   bottom,
//   left,
// }

interface Props {
  bgColor?: string;
  // gradient?: {
  //   direction: Directions;
  //   color1: string;
  //   color2: string;
  // };
  whiteText?: boolean;
  children: JSX.Element;
}

export default function Card(props: Props) {
  const styles = {
    backgroundColor: props.bgColor,
    color: props.whiteText ? "#eeeeee" : "#222",
    // background: `linearGradient(to ${props.gradient?.direction}, ${props.gradient?.color1}, ${props.gradient?.color2})`,
  };

  return (
    <div className="Card" style={styles}>
      {props.children}
    </div>
  );
}
