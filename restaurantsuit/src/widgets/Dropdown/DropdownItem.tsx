import React from "react";

import "./DropdownItem.css";

interface Props {
  itemName: string;
  faIcon: string;
  onClick: React.MouseEventHandler;
}

export default function DropdownItem(props: Props) {
  return (
    <li className="DropdownItem" onClick={props.onClick}>
      <i className={props.faIcon}></i>
      {props.itemName}
    </li>
  );
}
