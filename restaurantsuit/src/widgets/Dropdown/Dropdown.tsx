import React, { Children, useState } from "react";

import "./Dropdown.css";

interface Props {
  buttonText: string;
  children: React.ReactNode;
}

export default function Dropdown(props: Props) {
  const [isDrop, setIsDrop] = useState(false);

  // window.addEventListener("click", (e) => {
  //   if (
  //     document
  //       .getElementById("dropbox")
  //       ?.contains(e.target as HTMLBodyElement)
  //   ) {
  //     setIsDrop(true)
  //   }
  //   else{
  //     setIsDrop(false)
  //   }
  // });

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
        <ul className="PageFade" id="dropbox">
          {React.Children.map(props.children, (child) => child)}
        </ul>
      ) : null}
    </div>
  );
}
