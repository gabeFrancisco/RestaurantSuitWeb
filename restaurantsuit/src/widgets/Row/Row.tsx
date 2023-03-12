import { CSSProperties } from "react";
import "./Row.css";

export enum JustifyContent {
  Center = "center",
  Left = "flex-start",
  Right = "flex-end",
  SpaceBetween = "space-between",
}

export enum AlignItems {
  Center = "center",
  Baseline = "baseline",
}

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
  };

  return <div style={styles}>
    {props.children}
  </div>;
}
