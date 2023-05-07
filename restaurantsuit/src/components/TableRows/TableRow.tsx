import React, { useEffect, useState } from "react";
import Dropdown from "../../widgets/Dropdown/Dropdown";
import DropdownItem from "../../widgets/Dropdown/DropdownItem";
import Row from "../../widgets/Row/Row";
import {
  AlignItems,
  JustifyContent,
} from "../../widgets/FlexProperties/FlexProperties";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setBusyState } from "../../store/features/tablesSlice";
import { Table } from "../../models/interfaces/Table";

export default function TableRow({table} : {table: Table}) {
  const [busy, setBusy] = useState(table.isBusy);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  //checks the state of the busy constant. This logic need to
  //be implemented inside an function for sync action
  const returnBusyState = () => {
    if (busy) {
      setBusy(false);
      return false
    } else {
      setBusy(true);
      return true;
    }
  }

  //function to be performed when the busy/unbusy button is clicked
  const checkBusyState = () => {
    dispatch(
      setBusyState({
        tableId: table.id as number,
        state: returnBusyState(),
        confirm: true,
      })
    );
  };

  return (
    <tr>
      <td>{table.number}</td>
      <td>{table.chairs}</td>
      <td>{busy ? "Em uso" : "Desocupada"}</td>
      <td>
        <Row
          alignItems={AlignItems.FlexStart}
          justifyContent={JustifyContent.Center}
        >
          <button
            className="btn-sm"
            style={{ backgroundColor: busy ? "#e9c474" : "#45c576" }}
            onClick={checkBusyState}
          >
            {busy ? "Desocupar" : "Ocupar"}
          </button>
          {user.role === 0 ? (
            <>
              <Dropdown buttonText="Ações">
                <DropdownItem
                  itemName="Editar"
                  faIcon="fas fa-solid fa-pen fa-fw"
                  onClick={() => {
                    console.log(table.id);
                    // dispatch(setProduct(table.id));
                    // navigate("/updateProduct");
                  }}
                />
                <DropdownItem
                  itemName="Remover"
                  faIcon="fas fa-solid fa-trash fa-fw"
                  onClick={() => {}}
                />
              </Dropdown>
            </>
          ) : (
            <div />
          )}
        </Row>
      </td>
    </tr>
  );
}
