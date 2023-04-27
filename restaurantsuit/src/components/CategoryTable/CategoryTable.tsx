import React, { useEffect, useState } from "react";
import CategoryRow from "../TableRows/CategoryRow";
import { fetchAllCategories } from "../../store/features/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

import "./CategoryTable.css";
import { Loader } from "../../widgets/Loading/Loader";
import Center from "../../widgets/Center/Center";

export default function CategoryTable() {
  const categories = useAppSelector((state) => state.categories.categoryList);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories()).then(() => setLoaded(true));
  }, []);

  return (
    <div className="Table-Area">
      {!loaded? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <table className="PageFade">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Cor</th>
              <th>Qte. Produtos</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? (
              categories.map((cat) => (
                <CategoryRow
                 category={cat}
                />
              ))
            ) : (
              <tr className="center">
                <h2 className="m-3">Por enquanto não há nada aqui ;)</h2>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
