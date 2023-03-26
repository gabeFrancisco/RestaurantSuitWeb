import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllCategories } from "../../../store/features/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Card from "../../../widgets/Card/Card";
import Row, { AlignItems, JustifyContent } from "../../../widgets/Row/Row";
import SectionTitle from "../../../widgets/SectionTitle/SectionTitle";

export default function NewProductPage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  const categories = useAppSelector((state) => state.categories.categoryList);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      productName: "",
      category: categories.length > 0 ? categories[0].id : 0,
      quantity: null,
      price: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="PageFade">
      <SectionTitle title="Novo produto" />
      <Card>
        <div className="ProductForm">
          <Row
            alignItems={AlignItems.Baseline}
            justifyContent={JustifyContent.SpaceBetween}
          >
            <label htmlFor="">Nome do produto</label>
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder="Nome"
              className="m-2"
              onChange={formik.handleChange}
              value={formik.values.productName}
            />
            <label htmlFor="">Categoria</label>
            <select
              className="m-2"
              style={{ appearance: "menulist" }}
              name="category"
              value={formik.values.category}
              onChange={formik.handleChange}
            >
              {categories ? (
                categories.map((cat) => {
                  return <option value={cat.id}>{cat.name}</option>;
                })
              ) : (
                <option>Nenhuma</option>
              )}
            </select>
            <label htmlFor="">Quantidade</label>
            <input
              min={1}
              type="number"
              id="quantity"
              name="quantity"
              placeholder="Quantidade"
              className="m-2"
              onChange={formik.handleChange}
              // value={formik.values.quantity}
            />
          </Row>
          <Row
            alignItems={AlignItems.Baseline}
            justifyContent={JustifyContent.SpaceBetween}
          >
            <div>
              <label htmlFor="">Preço</label>
              <input
                min={0.01}
                type="number"
                id="price"
                name="price"
                placeholder="Preço"
                className="m-2"
                onChange={formik.handleChange}
                // value={formik.values.quantity}
              />
            </div>
          </Row>
        </div>
      </Card>
      <Row
        alignItems={AlignItems.Baseline}
        justifyContent={JustifyContent.Center}
      >
        <button className="btn btn-danger" onClick={() => navigate(-1)}>
          Cancelar
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Adicionar!
        </button>
      </Row>
    </div>
  );
}
