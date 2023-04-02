import React, { Children, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";

import "./Dropdown.css";

interface Props {
  buttonText: string;
  children: React.ReactNode;
}

export default function Dropdown(props: Props) {
  const [isDrop, setIsDrop] = useState(false);
  const ref = useOutsideClick(setIsDrop);

  return (
    <div className="Dropdown">
      <button
        className="btn-sm btn-primary"
        type="button"
        onClick={() => (isDrop ? setIsDrop(false) : setIsDrop(true))}
      >
        {props.buttonText} <i className="fa-solid fa-caret-down"></i>
      </button>
      {isDrop ? (
        <div ref={ref}>
          <ul className="PageFade" id="dropbox">
            {React.Children.map(props.children, (child) => child)}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
