import React, { CSSProperties } from "react";
import { AlignItems, JustifyContent } from "../FlexProperties/FlexProperties";

interface Props {
  margin?: number;
  padding?: number;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  children?: JSX.Element | JSX.Element[];
}

export default function Column(props: Props) {
  const styles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    margin: `${props.margin}rem`,
    padding: `${props.padding}rem`
  };

  return <div style={styles}>
    {props.children}
  </div>;
}
