import React from "react";
import Modal from "react-modal";

import "./ModalStyle.css";
import { useAppDispatch } from "../store/store";
import { removeProduct } from "../store/features/productsSlice";

interface Props {
  productId: number;
  productName: string;
  closeHandler: () => void;
}

export default function ProductRemovalModal(props: Props) {
  const dispatch = useAppDispatch();
  return (
    <Modal
      isOpen={true}
      style={{
        content: {
          margin: "15vh auto",
          height: "8rem",
          width: "25rem",
        },
      }}
    >
      {/* <h3>Are you sure you want to remove this category?</h3> */}

      <h3>
        Você tem certeza que deseja remover o produto <b>{props.productName}</b>
        ?
      </h3>

      <div className="Button-Area">
        <button className="btn-primary" onClick={() => props.closeHandler()}>
          Cancelar
        </button>
        <button
          className="btn-danger"
          onClick={() => {
            dispatch(removeProduct(props.productId));
            console.log("clickeeeeed!")
            props.closeHandler();
          }}
        >
          Remover!
        </button>
      </div>
    </Modal>
  );
}
