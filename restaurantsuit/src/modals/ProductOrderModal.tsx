import React from "react";
import Modal from "react-modal";

import "./ModalStyle.css";
import { useAppSelector } from "../store/store";
import ProductTable from "../components/ProductTable/ProductTable";

interface Props {
  closeHandler: () => void;
}

export default function ProductOrderModal(props: Props) {
  const products = useAppSelector(state => state.products.productList);
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
      <ProductTable isOrder/>
      <div className="Button-Area">
        <button className="btn-primary m-2" onClick={() => props.closeHandler()}>
          Cancelar
        </button>
        <button
          className="btn-danger m-2"
          // onClick={() => {
          //   dispatch(removeCategory(props.categoryId));
          //   props.closeHandler();
          // }}
        >
          Adicionar!
        </button>
      </div>
    </Modal>
  );
}
