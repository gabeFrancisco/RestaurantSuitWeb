import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setProduct } from "../../store/features/productsSlice";
import { useAppDispatch } from "../../store/store";
import Dropdown from "../../widgets/Dropdown/Dropdown";
import DropdownItem from "../../widgets/Dropdown/DropdownItem";
import ProductRemovalModal from "../../modals/ProductRemovalModal/ProductRemovalModa";
import { Product } from "../../models/interfaces/Product";

export default function ProductRow({product} : {product: Product}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [productRemovalModal, setProductRemovalModal] = useState(false);
  const closeProductRemovalModal = () => setProductRemovalModal(false);

  return (
    <tr>
      {productRemovalModal ? (
        <ProductRemovalModal
          closeHandler={closeProductRemovalModal}
          productId={product.id}
          productName={product.name}
        />
      ) : null}
      <td>{product.name}</td>
      <td>{product.categoryName}</td>
      <td>{product.quantity}</td>
      <td>R${product.price.toFixed(2)}</td>
      <td>
        <Dropdown buttonText="Ações">
          <DropdownItem
            itemName="Editar"
            faIcon="fas fa-solid fa-pen fa-fw"
            onClick={() => {
              console.log(product.id);
              dispatch(setProduct(product.id));
              navigate("/updateProduct");
            }}
          />
          <DropdownItem
            itemName="Remover"
            faIcon="fas fa-solid fa-trash fa-fw"
            onClick={() => setProductRemovalModal(true)}
          />
        </Dropdown>
      </td>
    </tr>
  );
}
