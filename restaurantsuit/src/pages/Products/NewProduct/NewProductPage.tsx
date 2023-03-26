import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllCategories } from "../../../store/features/categoriesSlice";
import { addProduct } from "../../../store/features/productsSlice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import Card from "../../../widgets/Card/Card";
import Column from "../../../widgets/Column/Column";
import {
  AlignItems,
  JustifyContent,
} from "../../../widgets/FlexProperties/FlexProperties";
import Row from "../../../widgets/Row/Row";
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
      name: "",
      categoryId: categories.length > 0 ? categories[0].id : 0,
      quantity: null,
      price: 0,
    },
    onSubmit: (values) => {
      dispatch(addProduct(values))
    },
  });

  return (
    <div className="PageFade">
      <SectionTitle title="Novo produto" />
      <Card>
        <div className="ProductForm">
          <Column
            alignItems={AlignItems.Stretch}
            justifyContent={JustifyContent.Center}
          >
            <Row
              alignItems={AlignItems.Baseline}
              justifyContent={JustifyContent.Left}
            >
              <label htmlFor="">Nome do produto</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                className="m-2"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </Row>
            <Row
              alignItems={AlignItems.Baseline}
              justifyContent={JustifyContent.Left}
            >
              <label htmlFor="">Categoria</label>
              <select
                className="m-2"
                style={{ appearance: "menulist" }}
                name="categoryId"
                value={formik.values.categoryId}
                onChange={formik.handleChange}
              >
                {categories ? (
                  categories.map((cat) => {
                    return <option value={+cat.id}>{cat.name}</option>;
                  })
                ) : (
                  <option>Nenhuma</option>
                )}
              </select>
            </Row>
          </Column>
          <Column
            alignItems={AlignItems.Baseline}
            justifyContent={JustifyContent.Center}
          >
            <div>
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
            </div>
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
          </Column>
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
