import React from "react";
import Modal from "react-modal";

import "./ModalStyle.css";
import { useAppSelector } from "../store/store";
import ProductTable from "../components/ProductTable/ProductTable";
import ProductOrderTable from "../components/ProductOrderTable/ProductOrderTable";
import { useDispatch } from "react-redux";
import { emptyList, fillFinalList } from "../store/features/productOrderSlice";

interface Props {
  closeHandler: () => void;
}

export default function ProductOrderModal(props: Props) {
  const dispatch = useDispatch();
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
      <ProductOrderTable
        productOrderList={productOrders}
        hasQuantity={false}
        hasActions
      />
      <div className="Button-Area">
        <button className="btn-primary m-2" onClick={() => {
          props.closeHandler()
          dispatch(emptyList())
        }}>Cancelar</button>
        <button className="btn-danger m-2" onClick={() => {
          dispatch(fillFinalList())
          props.closeHandler()
        }}>
          Adicionar!
        </button>
      </div>
    </Modal>
  );
}
