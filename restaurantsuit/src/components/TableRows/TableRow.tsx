import React, { useState } from "react";
import Dropdown from "../../widgets/Dropdown/Dropdown";
import DropdownItem from "../../widgets/Dropdown/DropdownItem";
import Row from "../../widgets/Row/Row";
import {
  AlignItems,
  JustifyContent,
} from "../../widgets/FlexProperties/FlexProperties";

interface Props {
  id: number;
  number: number;
  chairs: number;
  isBusy: boolean;
}

export default function TableRow(props: Props) {
  const [busy, setBusy] = useState(props.isBusy);

  return (
    <tr>
      <td>{props.number}</td>
      <td>{props.chairs}</td>
      <td>{busy ? "Em uso" : "Desocupada"}</td>
      <td>
        <Row
          alignItems={AlignItems.FlexStart}
          justifyContent={JustifyContent.Center}
        >
          <button
            className="btn-sm"
            style={{ backgroundColor: busy ? "#e9c474" : "#45c576" }}
            onClick={() => (busy ? setBusy(false) : setBusy(true))}
          >
            {busy ? "Desocupar" : "Ocupar"}
          </button>
          <Dropdown buttonText="Ações">
            <DropdownItem
              itemName="Editar"
              faIcon="fas fa-solid fa-pen fa-fw"
              onClick={() => {
                console.log(props.id);
                // dispatch(setProduct(props.id));
                // navigate("/updateProduct");
              }}
            />
            <DropdownItem
              itemName="Remover"
              faIcon="fas fa-solid fa-trash fa-fw"
              onClick={() => {}}
            />
          </Dropdown>
        </Row>
      </td>
    </tr>
  );
}
