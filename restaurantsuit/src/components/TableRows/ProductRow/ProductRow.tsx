import { $CombinedState } from "@reduxjs/toolkit";
import React from "react";
import Dropdown from "../../../widgets/Dropdown/Dropdown";
import DropdownItem from "../../../widgets/Dropdown/DropdownItem";

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
    <tr>
      <td>{props.productName}</td>
      <td>{props.categoryName}</td>
      <td>{props.quantity}</td>
      <td>R${props.price.toFixed(2)}</td>
      <td>
        <Dropdown buttonText="Ações">
          <DropdownItem itemName="Editar" faIcon="fas fa-solid fa-pen fa-fw" />
          <DropdownItem itemName="Remover" faIcon="fas fa-solid fa-trash fa-fw"/>
        </Dropdown>
      </td>
    </tr>
  );
}
