import React from "react";
import ProductRow from "../TableRows/ProductRow/ProductRow";

export default function ProductTable() {
  return (
    <div className="Table-Area">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow id={7} categoryId={12} categoryName="Heaven" productName="Some good food!" quantity={3} price={98.99}/>
        </tbody>
      </table>
    </div>
  );
}
