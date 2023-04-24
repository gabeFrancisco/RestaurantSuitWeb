import React, { useEffect, useState } from "react";
import CategoryRow from "../TableRows/CategoryRow";
import { fetchAllCategories } from "../../store/features/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

import "./CategoryTable.css";
import { Loader } from "../../widgets/Loading/Loader";

export default function CategoryTable() {
  const categories = useAppSelector((state) => state.categories.categoryList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  return (
    <div className="Table-Area">
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
          
          {categories.length > 0 ? (categories.map((cat) => (
            <CategoryRow
              id={cat.id}
              categoryName={cat.name}
              color={cat.color}
              productsQty={7}
            />
          ))) : (
            <Loader/>
          )}
        </tbody>
      </table>
    </div>
  );
}
