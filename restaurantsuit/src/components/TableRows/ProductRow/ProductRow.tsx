import React from "react";
import { useNavigate } from "react-router-dom";
import { setProduct } from "../../../store/features/productsSlice";
import { useAppDispatch } from "../../../store/store";
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
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  return (
    <tr>
      <td>{props.productName}</td>
      <td>{props.categoryName}</td>
      <td>{props.quantity}</td>
      <td>R${props.price.toFixed(2)}</td>
      <td>
        <Dropdown buttonText="Ações">
          <DropdownItem
            itemName="Editar"
            faIcon="fas fa-solid fa-pen fa-fw"
            onClick={() => {
              console.log(props.id)
              dispatch( setProduct(props.id))
              navigate("/updateProduct")
          }}
          />
          <DropdownItem
            itemName="Remover"
            faIcon="fas fa-solid fa-trash fa-fw"
            onClick={() => console.log("I'm clicked too!!!")}
          />
        </Dropdown>
      </td>
    </tr>
  );
}
