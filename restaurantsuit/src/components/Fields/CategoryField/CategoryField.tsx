import { useFormik } from "formik";
import React from "react";
import Row, { AlignItems, JustifyContent } from "../../../widgets/Row/Row";

interface Props {
  id: number;
  categoryName: string;
  color: string;
  productsQty: number;
}

export default function CategoryField(props: Props) {
  const formik = useFormik({
    initialValues: {
      name: props.categoryName,
      color: props.color,
    },
    onSubmit: () => {},
  });

  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Nome da categoria"
          id="name"
          name="name"
          className="m-2"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </td>
      <td className="Category-Color-Wrapper">
        <input
          type="color"
          placeholder="Cor"
          id="color"
          name="color"
          onChange={formik.handleChange}
          value={formik.values.color}
        />
      </td>
      <td></td>
      <td className="button-area">
        <button className="btn-sm btn-warning">Editar</button>
        <button className="btn-sm btn-danger" onClick={() => {}}>
          Apagar
        </button>
      </td>
    </tr>
  );
}
