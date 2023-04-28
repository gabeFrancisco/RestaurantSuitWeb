import Modal from "react-modal";
import { removeCategory } from "../store/features/categoriesSlice";
import { useAppDispatch } from "../store/store";

import "./ModalStyle.css";

interface Props {
  categoryId: number;
  categoryName: string;
  closeHandler: () => void;
}

export default function CategoryRemovalModal(props: Props) {
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
        Você tem certeza que deseja remover a categoria{" "}
        <b>{props.categoryName}</b>?
      </h3>

      <div className="Button-Area">
        <button className="btn-primary" onClick={() => props.closeHandler()}>
          Cancelar
        </button>
        <button
          className="btn-danger"
          onClick={() => {
            dispatch(removeCategory(props.categoryId));
            props.closeHandler();
          }}
        >
          Remover!
        </button>
      </div>
    </Modal>
  );
}
