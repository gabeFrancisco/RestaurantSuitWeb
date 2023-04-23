import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link to="dashboard"><i className="fas fa-chart-pie fa-fw"></i>Painel</Link>
        </li>
        <li>
          <Link to="categories"><i className="fas fa-tag fa-fw"></i>Categorias</Link>
        </li>
        <li>
          <Link to="products"><i className="fas fa-cart-shopping fa-fw"></i>Produtos</Link>
        </li>
        <li>
          <Link to="tables"><i className="fas fa-inbox fa-fw"></i>Mesas</Link>
        </li>
        <li>
          <Link to="orders"><i className="fas fa-ticket fa-fw"></i>Pedidos</Link>
        </li>
        <li>
          <Link to="workGroups"><i className="fas fa-briefcase fa-fw"></i>Grupos de Serviço</Link>
        </li>
        <li>
          <Link to="customers"><i className="fas fa-user-group fa-fw"></i>Clientes</Link>
        </li>
        <li>
          <Link to="user"><i className="fas fa-gear fa-fw"></i>Configurações</Link>
        </li>
      </ul>
    </aside>
  );
}
