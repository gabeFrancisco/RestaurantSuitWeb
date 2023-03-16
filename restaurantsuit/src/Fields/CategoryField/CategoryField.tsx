import React, { useState } from "react";
import CategoryRemovalModal from "../../modals/CategoryRemovalModal/CategoryRemovalModal";

import "./CategoryField.css";

interface Props {
  id: number,
  categoryName: string;
  color: string;
  productsQty: number;
}

export default function CategoryField(props: Props) {
  const [categoryRemovalModal, setCategoryRemovalModal] = useState(false)
  const closeCategoryRemovalModal = () => setCategoryRemovalModal(false)
  
  return (
    <tr>
      <td>{props.categoryName}</td>
      <td className="Category-Color-Wrapper">
        <div
          className="Category-Color"
          style={{
            backgroundColor: props.color,
          }}
        ></div>
      </td>
      <td>5</td>
      <td className="button-area">
        {categoryRemovalModal ? (
          <CategoryRemovalModal
            categoryId={props.id}
            closeHandler={closeCategoryRemovalModal}
          />
        ) : null}
        <button className="btn-sm btn-warning">Editar</button>
        <button
          className="btn-sm btn-danger"
          onClick={() => setCategoryRemovalModal(true)}
        >
          Apagar
        </button>
      </td>
    </tr>
  );
}
