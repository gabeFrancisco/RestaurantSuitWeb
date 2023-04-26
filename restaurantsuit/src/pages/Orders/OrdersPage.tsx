import React from "react";
import SectionTitle from "../../widgets/SectionTitle/SectionTitle";
import Column from "../../widgets/Column/Column";
import { AlignItems, JustifyContent } from "../../widgets/FlexProperties/FlexProperties";
import Card from "../../widgets/Card/Card";
import OrdersList from "../../components/OrdersList/OrdersList";

export default function OrdersPage() {
  return (
    <div className="PageFade">
      <SectionTitle
        title="Pedidos"
        subtitle="Gerencie aqui todos os seus pedidos atuais"
      />
      <div className=" m-2">
        <Column alignItems={AlignItems.Stretch} justifyContent={JustifyContent.Center} >
         <OrdersList/>
        </Column>
      </div>
    </div>
  );
}
