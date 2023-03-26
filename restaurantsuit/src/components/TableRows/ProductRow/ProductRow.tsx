import React from "react";

interface Props {
  id: number;
  productName: string;
  categoryId: number;
  categoryName: string;
  quantity: number;
  price: number;
}

export default function ProductRow(props: Props) {
  return (
    <tr className="PageFade">
      <td>{props.productName}</td>
      <td>{props.categoryName}</td>
      <td>{props.quantity}</td>
      <td>R${props.price}</td>
      <td>
        <button className="btn-sm btn-secondary">
          Ações <i className="fa-solid fa-caret-down"></i>
        </button>
      </td>
    </tr>
  );
}
