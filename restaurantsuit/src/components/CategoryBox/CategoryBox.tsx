import React from "react";
import Card from "../../widgets/Card/Card";
import Row, { AlignItems, JustifyContent } from "../../widgets/Row/Row";

import "./CategoryBox.css";

interface Props {
  closeHandler: () => void;
}

export default function CategoryBox(props: Props) {
  return (
    <div className="PageFade">
      <Card>
        <form>
        <Row alignItems={AlignItems.Baseline} justifyContent={JustifyContent.SpaceBetween}>
          <input
            type="text"
            placeholder="Nome da categoria"
            id="name"
            name="name"
            className="m-2"
          />

          <input
            type="text"
            placeholder="Cor selecionada"
            id="selectedColor"
            name="selectedColor"
            className="m-2"
            readOnly={true}
          />
          <input type="color" placeholder="Cor" id="color" name="color" />

          <button className="m-2 btn-sm btn-success" type="button" onClick={() => null}>
            Adicionar
          </button>
          <button className="m-2 btn-sm btn-danger" type="button" onClick={() => props.closeHandler()}>
            Close
          </button>
        </Row>
        </form>
      </Card>
    </div>
  );
}
