import React from "react";
import Modal from "react-modal";

import "./ModalStyle.css";
import { useAppSelector } from "../store/store";
import ProductTable from "../components/ProductTable/ProductTable";
import ProductOrderTable from "../components/ProductOrderTable/ProductOrderTable";

interface Props {
  closeHandler: () => void;
}

export default function ProductOrderModal(props: Props) {
  const products = useAppSelector((state) => state.products.productList);
  const productOrders = useAppSelector(
    (state) => state.productOrders.productOrderList
  );
  return (
    <Modal
      isOpen={true}
      style={{
        content: {
          margin: "10vh auto",
          height: "25rem",
          width: "50rem",
        },
      }}
    >
      <h2 className="m-2">Adição de produtos</h2>
      <hr />
      <h3 className="m-2">Selecione os produtos abaixo:</h3>
      <ProductTable isOrder={false} hasActions={false} />
      <hr />
      <h3 className="m-2">Confira e confirme:</h3>
      <ProductOrderTable productOrderList={productOrders} hasQuantity={false}/>
      <div className="Button-Area">
        <button
          className="btn-primary m-2"
          onClick={() => props.closeHandler()}
        >
          Cancelar
        </button>
        <button className="btn-danger m-2">Adicionar!</button>
      </div>
    </Modal>
  );
}
