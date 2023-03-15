import Modal from "react-modal";
import { removeCategory } from "../store/features/categoriesSlice";
import { useAppDispatch } from "../store/store";

import "./CategoryRemovalModal.css";

interface Props {
  categoryId: number;
  closeHandler: () => void;
}

export default function CategoryRemovalModal(props: Props) {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Modal
        isOpen={true}
        style={{
          content: {
            margin: "15vh auto",
            height: "8rem",
            width: "20rem",
          },
          overlay: {},
        }}
      >
        <h3>Are you sure you want to remove this category?</h3>
        <div className="Button-Area">
          <button className="btn-primary" onClick={() => props.closeHandler()}>
            Cancel
          </button>
          <button
            className="btn-danger"
            onClick={() => {
              dispatch(removeCategory(props.categoryId));
              props.closeHandler()
            }}
          >
            Remove!
          </button>
        </div>
      </Modal>
    </div>
  );
}
