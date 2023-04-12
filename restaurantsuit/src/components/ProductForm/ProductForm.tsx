import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../../models/interfaces/Category";
import { fetchAllCategories } from "../../store/features/categoriesSlice";
import { addProduct, updateProduct } from "../../store/features/productsSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Card from "../../widgets/Card/Card";
import Column from "../../widgets/Column/Column";
import {
  AlignItems,
  JustifyContent,
} from "../../widgets/FlexProperties/FlexProperties";
import Row from "../../widgets/Row/Row";
import { Product } from "../../models/interfaces/Product";

interface Props {
  isEdit: boolean;
}

export default function ProductForm(props: Props) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.categories.categoryList);

  //Initial template for the form
  //This is used to handle a new product or
  //get actual data of an existing product to update
  let formProduct = {
    id: 0,
    name: "",
    categoryId: categories[0].id,
    quantity: 0,
    price: 0.0,
  };

  //The product from the Redux store
  let product: Product;

  //if the isEdit is set to true, the formProduct gets the data
  //from the product variable and fill the formik inital state
  if (props.isEdit) {
    product = useAppSelector((state) => state.products.product);
    formProduct = {
      id: product.id,
      name: product.name,
      categoryId: product.categoryId,
      quantity: product.quantity,
      price: product.price,
    };
  }

  //Fetch the categories to populate the select input
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);

  const formik = useFormik({
    initialValues: formProduct,
    onSubmit: (values) => {
      if (props.isEdit) {
        dispatch(updateProduct(values)).then(() => navigate("/products"));
      }
      else{
        dispatch(addProduct(values)).then(() => navigate("/products"));
      }
    },
  });
  return (
    <div className="PageFade">
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
                  categories.map((cat: Category) => {
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
                value={formik.values.quantity}
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
                value={formik.values.price.toFixed(2)}
              />
            </div>
          </Column>
        </div>
      </Card>
      <Row
        alignItems={AlignItems.Baseline}
        justifyContent={JustifyContent.Center}
      >
        <button
          className="btn btn-danger"
          onClick={() => navigate("/products")}
        >
          Cancelar
        </button>
        {props.isEdit ? (
          <button
            className="btn btn-primary"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Atualizar
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Adicionar!
          </button>
        )}
      </Row>
    </div>
  );
}
