import React from "react";

import "./CategoryTable.css";

export default function CategoryTable() {
  return (
    <div className="CategoryTable">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cor</th>
            <th>Qte. Produtos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Xis</td>
            <td>Amarelo</td>
            <td>5</td>
            <td className="button-area">
              <button className="btn-sm btn-warning">Editar</button>
              <button className="btn-sm btn-danger">Apagar</button>
            </td>
          </tr>
          <tr>
            <td>Bebidas</td>
            <td>Verde</td>
            <td>8</td>
            <td className="button-area">
              <button className="btn-sm btn-warning">Editar</button>
              <button className="btn-sm btn-danger">Apagar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
