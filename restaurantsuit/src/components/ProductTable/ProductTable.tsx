import React, { useEffect } from "react";
import { fetchAllProducts } from "../../store/features/productsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import ProductRow from "../TableRows/ProductRow/ProductRow";

export default function ProductTable() {
  const products = useAppSelector((state) => state.products.productList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <div className="Table-Area">
      <table>
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
          {products.map((product) => (
            <ProductRow
              id={product.id}
              productName={product.name}
              categoryName={product.categoryName}
              categoryId={product.categoryId}
              quantity={product.quantity}
              price={product.price}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}