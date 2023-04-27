import React from "react";
import { ProductOrder } from "../../models/interfaces/ProductOrder";
import ProductOrderRow from "./ProductOrderRow";

export default function ProductOrderTable({
  productOrderList,
}: {
  productOrderList: Array<ProductOrder>;
}) {
  return (
    <div className="Table-Area">
      <table className="Page-Fade">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Categoria</th>
            <th>Valor Unitário</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {productOrderList.length > 0 ? (
            productOrderList.map((pOrder) => <ProductOrderRow productOrder={pOrder} />)
          ) : (
            <tr className="center">
              <h2 className="m-3">Por enquanto não há nada aqui ;)</h2>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
