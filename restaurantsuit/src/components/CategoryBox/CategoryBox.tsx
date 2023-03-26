import { useFormik } from "formik";
import React from "react";
import { addCategory } from "../../store/features/categoriesSlice";
import { useAppDispatch } from "../../store/store";
import Card from "../../widgets/Card/Card";
import { AlignItems, JustifyContent } from "../../widgets/FlexProperties/FlexProperties";
import Row from "../../widgets/Row/Row";

import "./CategoryBox.css";

interface Props {
  closeHandler: () => void;
}

export default function CategoryBox(props: Props) {
  const dispatch = useAppDispatch()
  const formik = useFormik({
    initialValues: {
      name: "",
      color: "#000000",
    },
    onSubmit: (values, { resetForm }) => {
      dispatch(addCategory(values))
      resetForm()
    },
  });

  return (
    <div className="PageFade">
      <Card>
        <form onSubmit={formik.handleSubmit}>
          <Row
            alignItems={AlignItems.Baseline}
            justifyContent={JustifyContent.SpaceBetween}
          >
            <Row
              alignItems={AlignItems.Center}
              justifyContent={JustifyContent.SpaceBetween}
            >
              <input
                type="text"
                placeholder="Nome da categoria"
                id="name"
                name="name"
                className="m-2"
                onChange={formik.handleChange}
                value={formik.values.name}
              />

              <input
                type="color"
                placeholder="Cor"
                id="color"
                name="color"
                onChange={formik.handleChange}
                value={formik.values.color}
              />
            </Row>
            <Row
              justifyContent={JustifyContent.Right}
              alignItems={AlignItems.Center}
            >
              <button
                className="m-2 btn-sm btn-success"
                onClick={() => null}
                >
                Adicionar
              </button>
              <button
                type="button"
                className="m-2 btn-sm btn-danger"
                onClick={() => props.closeHandler()}
              >
                Cancelar
              </button>
            </Row>
          </Row>
        </form>
      </Card>
    </div>
  );
}
