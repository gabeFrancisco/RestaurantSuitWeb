import React, { useEffect, useState } from "react";
import CategoryRemovalModal from "../../modals/CategoryRemovalModal";
import { fetchAllCategories } from "../../store/features/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

import "./CategoryTable.css";

export default function CategoryTable() {
  const categories = useAppSelector((state) => state.categories.categoryList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [])

  const [categoryRemovalModal, setCategoryRemovalModal] = useState(false)
  const closeCategoryRemovalModal = () => setCategoryRemovalModal(false)

  return (
    <div className="CategoryTable">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Cor</th>
            <th>Qte. Produtos</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat) => {
            return (
              <tr>
                <td>{cat.name}</td>
                <td className="Category-Color-Wrapper">
                  <div className="Category-Color"
                    style={{
                      backgroundColor: cat.color
                    }}
                  ></div>
                </td>
                <td>5</td>
                <td className="button-area">
                  {categoryRemovalModal? <CategoryRemovalModal closeHandler={closeCategoryRemovalModal}/> : null}
                  <button className="btn-sm btn-warning" >Editar</button>
                  <button className="btn-sm btn-danger" onClick={() => setCategoryRemovalModal(true)}>Apagar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
