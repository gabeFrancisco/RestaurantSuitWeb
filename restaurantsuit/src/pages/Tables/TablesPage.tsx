import React, { useState } from "react";
import SectionTitle from "../../widgets/SectionTitle/SectionTitle";
import TablesTable from "../../components/TablesTable/TablesTable";
import { useAppSelector } from "../../store/store";
import Row from "../../widgets/Row/Row";
import {
  AlignItems,
  JustifyContent,
} from "../../widgets/FlexProperties/FlexProperties";
import TableBox from "../../components/Boxes/TableBox";

export default function TablesPage() {
  const user = useAppSelector((state) => state.auth.user);
  const [tableBox, setTableBox] = useState(false);

  return (
    <div className="PageFade">
      <SectionTitle title="Mesas" subtitle="Gerencie suas mesas aqui." />
      <Row
        alignItems={AlignItems.Baseline}
        justifyContent={JustifyContent.SpaceBetween}
      >
        {user.role !== 0 ? (
          <>
            <button className="btn btn-primary" disabled={true}>
              <i className="fas fa-plus  fa-fw"></i>
              Nova mesa!
            </button>
            <small style={{ color: "#c22" }}>
              *Mesas só podem ser adiciondas, editadas ou excluidas por
              administradores.
            </small>
          </>
        ) : (
          <>
            <button
              className="btn btn-primary"
              disabled={false}
              onClick={() => setTableBox(true)}
            >
              <i className="fas fa-plus  fa-fw"></i>
              Nova mesa!
            </button>
          </>
        )}
      </Row>
      {tableBox ? <TableBox closeHandler={() => setTableBox(false)} /> : null}
      <TablesTable />
    </div>
  );
}
