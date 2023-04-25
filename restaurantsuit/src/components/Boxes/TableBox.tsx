import { useFormik } from "formik";
import React from "react";
import Card from "../../widgets/Card/Card";
import Row from "../../widgets/Row/Row";
import {
  AlignItems,
  JustifyContent,
} from "../../widgets/FlexProperties/FlexProperties";
import Column from "../../widgets/Column/Column";

interface Props {
  closeHandler: () => void;
}

export default function TableBox(props: Props) {
  const formik = useFormik({
    initialValues: {
      number: 0,
      chairs: 0,
    },
    onSubmit: () => {},
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
              <Column
                alignItems={AlignItems.FlexStart}
                justifyContent={JustifyContent.Left}
              >
                <input
                  type="number"
                  placeholder="Número da mesa"
                  id="number"
                  name="number"
                  
                  onChange={formik.handleChange}
                  value={formik.values.number}
                />
                <small className="m-2">Número da mesa</small>
              </Column>
              <Column
                alignItems={AlignItems.FlexStart}
                justifyContent={JustifyContent.Left}
              >
                <input
                  type="number"
                  placeholder="Cadeiras"
                  id="chairs"
                  name="chairs"
                  onChange={formik.handleChange}
                  value={formik.values.chairs}
                />
                <small className="m-2">Número de cadeiras</small>
              </Column>
            </Row>
            <Row
              justifyContent={JustifyContent.Right}
              alignItems={AlignItems.Center}
            >
              <button className="m-2 btn-sm btn-success" onClick={() => null}>
                Adicionar!
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
