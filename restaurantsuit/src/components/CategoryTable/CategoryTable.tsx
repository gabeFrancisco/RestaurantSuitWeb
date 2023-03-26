import React, { useEffect, useState } from "react";
import CategoryRow from "../TableRows/CategoryRow/CategoryRow";
import { fetchAllCategories } from "../../store/features/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

import "./CategoryTable.css";

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
          
          {categories.map((cat) => (
            <CategoryRow
              id={cat.id}
              categoryName={cat.name}
              color={cat.color}
              productsQty={7}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
