import React, { useState } from "react";
import { ProductOrder } from "../../models/interfaces/ProductOrder";

export default function ProductOrderRow({
  productOrder,
  hasQuantity,
}: {
  productOrder: ProductOrder;
  hasQuantity: boolean;
}) {
  const productTotal = productOrder.quantity * productOrder.product.price;
  const [quantity, setQuantity] = useState(0);
  return (
    <tr>
      <td>{productOrder.product.name}</td>
      <td>{productOrder.product.categoryName}</td>
      <td>R${productOrder.product.price.toFixed(2)}</td>
      {hasQuantity ? (
        <td>{productOrder.quantity}</td>
      ) : (
        <td>
          <input
            type="number"
            min={0}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            style={{ width: "5rem" }}
          />
        </td>
      )}
      <td>R${productTotal.toFixed(2)}</td>
    </tr>
  );
}
