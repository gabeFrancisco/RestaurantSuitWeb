import React, { useEffect, useRef, useState } from "react";
import { ProductOrder } from "../../models/interfaces/ProductOrder";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  changeQuantity,
  removeProductOrder,
} from "../../store/features/productOrderSlice";

export default function ProductOrderRow({
  index,
  productOrder,
  hasQuantity,
  hasActions,
}: {
  index: number;
  productOrder: ProductOrder;
  hasQuantity: boolean;
  hasActions: boolean;
}) {
  const productTotal = productOrder.quantity * productOrder.product.price;
  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(productOrder.quantity)
  }, [productOrder])

  return (
    <tr key={index}>
      <td>{productOrder.product.name}</td>
      <td>{productOrder.product.categoryName}</td>
      <td>R${productOrder.product.price.toFixed(2)}</td>
      {hasQuantity ? (
        <td>{productOrder.quantity}</td>
      ) : (
        <td>
          <input
          key={productOrder.id}
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => {
              dispatch(
                changeQuantity({
                  id: productOrder.id,
                  quantity: +e.target.value,
                })
              );
              setQuantity(+e.target.value);
            }}
            style={{ width: "5rem" }}
          />
        </td>
      )}
      <td>R${productTotal.toFixed(2)}</td>
      {hasActions ? (
        <td>
          <button
            className="btn-sm btn-danger"
            onClick={() => {
              dispatch(removeProductOrder(productOrder.id));
            }}
          >
            <i className="fas fa-minus fa-fw"></i>
          </button>
        </td>
      ) : null}
    </tr>
  );
}
