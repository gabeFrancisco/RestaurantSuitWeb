import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import CategoryRemovalModal from "../../../modals/CategoryRemovalModal/CategoryRemovalModal";
import apiService from "../../../services/apiService";
import {
  getProductsCountByCategory,
  updateCategory,
} from "../../../store/features/categoriesSlice";
import { useAppDispatch } from "../../../store/store";

import "./CategoryRow.css";

interface Props {
  id: number;
  categoryName: string;
  color: string;
  productsQty: number;
}

export default function CategoryRow(props: Props) {
  const [categoryRemovalModal, setCategoryRemovalModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const closeCategoryRemovalModal = () => setCategoryRemovalModal(false);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    apiService
    .get(`categories/productsCount/${props.id}`)
    .then(res => {
      const count = res.data;
      setProductsCount(count)
    })
  }, [])

  const formik = useFormik({
    initialValues: {
      id: props.id,
      name: props.categoryName,
      color: props.color,
    },
    onSubmit: (values) => {
      dispatch(updateCategory(values));
      setIsEdit(false);
    },
  });

  return (
    <>
      {isEdit ? (
        //Edit mode
        <tr className="PageFade">
          <td>
            <input
              type="text"
              placeholder="Nome da categoria"
              id="name"
              name="name"
              className="m-2"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </td>
          <td className="Category-Color-Wrapper">
            <input
              type="color"
              placeholder="Cor"
              id="color"
              name="color"
              onChange={formik.handleChange}
              value={formik.values.color}
            />
          </td>
          <td>&nbsp;</td>
          <td className="button-area">
            <button
              className="btn-sm btn-primary"
              type="button"
              onClick={() => formik.handleSubmit()}
            >
              Concluir!
            </button>
            <button
              className="btn-sm btn-danger"
              onClick={() => setIsEdit(false)}
            >
              Cancelar
            </button>
          </td>
        </tr>
      ) : (
        // Normal mode
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
          <td>{productsCount}</td>
          <td className="button-area">
            {categoryRemovalModal ? (
              <CategoryRemovalModal
                categoryId={props.id}
                categoryName={props.categoryName}
                closeHandler={closeCategoryRemovalModal}
              />
            ) : null}
            <button
              className="btn-sm btn-warning"
              onClick={() => setIsEdit(true)}
            >
              Editar
            </button>
            <button
              className="btn-sm btn-danger"
              onClick={() => setCategoryRemovalModal(true)}
            >
              Apagar
            </button>
          </td>
        </tr>
      )}
    </>
  );
}
