import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setProduct } from "../../store/features/productsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Dropdown from "../../widgets/Dropdown/Dropdown";
import DropdownItem from "../../widgets/Dropdown/DropdownItem";
import ProductRemovalModal from "../../modals/ProductRemovalModa";
import { Product } from "../../models/interfaces/Product";
import { ProductOrder } from "../../models/interfaces/ProductOrder";
import { addProductOrderToList } from "../../store/features/productOrderSlice";

export default function ProductRow({
  product,
  isOrder,
  hasActions
}: {
  product: Product;
  isOrder: boolean;
  hasActions: boolean
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [productRemovalModal, setProductRemovalModal] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const closeProductRemovalModal = () => setProductRemovalModal(false);
  const products = useAppSelector((state) => state.products.productList);
  const productOrders = useAppSelector(state => state.productOrders.productOrderList)

  const addProductOrder = () => {
    dispatch(
      addProductOrderToList({
        id: productOrders.length + 1,
        quantity: quantity,
        productId: product.id,
        product: products.find((p) => p.id === product.id) as Product,
      })
    );
  };

  return (
    <tr>
      {productRemovalModal ? (
        <ProductRemovalModal
          closeHandler={closeProductRemovalModal}
          productId={product.id as number}
          productName={product.name}
        />
      ) : null}
      <td>{product.name}</td>
      <td>{product.categoryName}</td>
      {isOrder ? (
        <td>
          <input
            type="number"
            min={0}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            style={{ width: "5rem" }}
          />
        </td>
      ) : null}

      <td>R${product.price.toFixed(2)}</td>
      <td>
        {!hasActions ? (
          <button className="btn-sm btn-success" onClick={addProductOrder}>
            <i className="fas fa-plus fa-fw"></i>
          </button>
        ) : (
          <Dropdown buttonText="Ações">
            <DropdownItem
              itemName="Editar"
              faIcon="fas fa-solid fa-pen fa-fw"
              onClick={() => {
                console.log(product.id);
                dispatch(setProduct(product.id as number));
                navigate("/updateProduct");
              }}
            />
            <DropdownItem
              itemName="Remover"
              faIcon="fas fa-solid fa-trash fa-fw"
              onClick={() => setProductRemovalModal(true)}
            />
          </Dropdown>
        )}
      </td>
    </tr>
  );
}
