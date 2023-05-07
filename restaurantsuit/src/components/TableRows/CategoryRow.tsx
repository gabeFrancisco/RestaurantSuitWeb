import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import CategoryRemovalModal from "../../modals/CategoryRemovalModal";
import apiService from "../../services/apiService";
import {
  getProductsCountByCategory,
  updateCategory,
} from "../../store/features/categoriesSlice";
import { useAppDispatch } from "../../store/store";
import { Category } from "../../models/interfaces/Category";

export default function CategoryRow({category} : {category: Category}) {
  const [categoryRemovalModal, setCategoryRemovalModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [productsCount, setProductsCount] = useState(0);
  const closeCategoryRemovalModal = () => setCategoryRemovalModal(false);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    apiService
    .get(`categories/productsCount/${category.id}`)
    .then(res => {
      const count = res.data;
      setProductsCount(count)
    })
  }, [])

  const formik = useFormik({
    initialValues: {
      id: category.id,
      name: category.name,
      color: category.color,
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
          <td>{category.name}</td>
          <td className="Category-Color-Wrapper">
            <div
              className="Category-Color"
              style={{
                backgroundColor: category.color,
              }}
            ></div>
          </td>
          <td>{productsCount}</td>
          <td className="button-area">
            {categoryRemovalModal ? (
              <CategoryRemovalModal
                categoryId={category.id as number}
                categoryName={category.name}
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
