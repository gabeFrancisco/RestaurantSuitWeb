import { CSSProperties } from "react";
import { AlignItems, JustifyContent } from "../FlexProperties/FlexProperties";
import "./Row.css";

interface Props {
  margin?: number;
  padding?: number;
  justifyContent: JustifyContent;
  alignItems: AlignItems;
  children?: JSX.Element | JSX.Element[]
}

export default function Row(props: Props) {
  const styles: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: props.alignItems,
    justifyContent: props.justifyContent,
    margin: `${props.margin}rem`,
    padding: `${props.padding}rem`
  };

  return <div style={styles}>
    {props.children}
  </div>;
}
