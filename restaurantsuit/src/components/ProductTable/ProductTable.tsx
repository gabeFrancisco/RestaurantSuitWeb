import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../../store/features/productsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import ProductRow from "../TableRows/ProductRow";
import { Loader } from "../../widgets/Loading/Loader";
import Center from "../../widgets/Center/Center";

export default function ProductTable() {
  const products = useAppSelector((state) => state.products.productList);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts()).then(() => setLoaded(true));
  }, []);

  return (
    <div className="Table-Area">
      {!loaded ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <table className="PageFade">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => <ProductRow product={product} />)
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
