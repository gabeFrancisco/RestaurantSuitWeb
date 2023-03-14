import Modal from "react-modal";

import "./CategoryRemovalModal.css";

interface Props{
  closeHandler: () => void
}

export default function CategoryRemovalModal(props: Props) {
  return (
    <div>
      <Modal
        isOpen={true}
        style={{
          content: {
            margin: '15vh auto',
            height: "8rem",
            width: "20rem",
          },
          overlay: {},
        }}
      >
        <h3>Are you sure you want to remove this category?</h3>
        <div className="Button-Area">
          <button className="btn-primary" onClick={() => props.closeHandler()}>Cancel</button>
          <button className="btn-danger">Remove!</button>
        </div>
      </Modal>
    </div>
  );
}
