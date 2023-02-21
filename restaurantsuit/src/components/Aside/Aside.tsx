import React from "react";
import { Link } from "react-router-dom";

import "./Aside.css";

export default function Aside() {
  return (
    <aside>
      <ul>
        <li>
          <Link to="home">Painel</Link>
        </li>
        <li>
          <Link to="categories">Categorias</Link>
        </li>
        <li>
          <Link to="user">Úsuario</Link>
        </li>
      </ul>
    </aside>
  );
}
