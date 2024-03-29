import React, { useEffect } from "react";
import { ProductOrder } from "../../models/interfaces/ProductOrder";
import ProductOrderRow from "./ProductOrderRow";

export default function ProductOrderTable({
  productOrderList,
  hasQuantity,
  hasActions,
}: {
  productOrderList: Array<ProductOrder>;
  hasQuantity: boolean;
  hasActions: boolean;
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
            productOrderList.map((pOrder, index) => (
              <ProductOrderRow
                index={index}
                productOrder={pOrder}
                hasQuantity={hasQuantity}
                hasActions={hasActions}
              />
            ))
          ) : (
            <tr className="center">
              <h2 className="m-3">Adicione produtos aqui!</h2>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
