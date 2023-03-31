import React, { Children, useState } from "react";

import "./Dropdown.css";

interface Props {
  buttonText: string;
  children: React.ReactNode;
}

export default function Dropdown(props: Props) {
  const [isDrop, setIsDrop] = useState(false);

  return (
    <div className="Dropdown">
      <button type="button" onClick={() => setIsDrop(true)}></button>
      {!isDrop ? (
        <ul>{React.Children.map(props.children, (child) => child)}</ul>
      ) : null}
    </div>
  );
}
