import React, { useState } from "react";
import { ProductOrder } from "../../models/interfaces/ProductOrder";
import { useAppDispatch } from "../../store/store";
import { changeQuantity } from "../../store/features/productOrderSlice";

export default function ProductOrderRow({
  productOrder,
  hasQuantity,
}: {
  productOrder: ProductOrder;
  hasQuantity: boolean;
}) {
  const productTotal = productOrder.quantity * productOrder.product.price;
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(productOrder.quantity);

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
            onChange={(e) => {
              setQuantity(+e.target.value)
              dispatch(
                changeQuantity({ id: productOrder.id, quantity: +e.target.value })
              )
            }}
            style={{ width: "5rem" }}
          />
        </td>
      )}
      <td>R${productTotal.toFixed(2)}</td>
    </tr>
  );
}
