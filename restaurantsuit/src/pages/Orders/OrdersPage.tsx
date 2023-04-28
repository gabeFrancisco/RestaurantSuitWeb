import React from "react";
import SectionTitle from "../../widgets/SectionTitle/SectionTitle";
import Column from "../../widgets/Column/Column";
import {
  AlignItems,
  JustifyContent,
} from "../../widgets/FlexProperties/FlexProperties";
import Card from "../../widgets/Card/Card";
import OrdersList from "../../components/OrdersList/OrdersList";
import { useNavigate } from "react-router-dom";

export default function OrdersPage() {
  const navigate = useNavigate();

  return (
    <div className="PageFade">
      <SectionTitle
        title="Pedidos"
        subtitle="Gerencie aqui todos os seus pedidos atuais"
      />
      <div className=" m-2">
        <button className="btn btn-primary" onClick={() => navigate("/newOrder")}>
          <i className="fas fa-plus  fa-fw"></i>
          Novo pedido!
        </button>
        <Column
          alignItems={AlignItems.Stretch}
          justifyContent={JustifyContent.Center}
        >
          <OrdersList />
        </Column>
      </div>
    </div>
  );
}
