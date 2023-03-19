import React from "react";
import DashboardCard from "../../widgets/DashboardCard/DashboardCard";
import SectionTitle from "../../widgets/SectionTitle/SectionTitle";

import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="PageFade">
      <SectionTitle
        title="Painel"
        // subtitle="Aqui você verá um resumo de todo o seu negócio!"
      />

      <div className="Cards">
        <DashboardCard
          title="Lucro estimado"
          data={27735}
          currency={true}
          theme="green"
        />
        <DashboardCard
          title="Vendas"
          data={27735}
          currency={true}
          theme="green"
        />
        <DashboardCard
          title="Pedidos"
          data={27735}
          currency={true}
          theme="green"
        />
         <DashboardCard
          title="Em preparação"
          data={27735}
          currency={true}
          theme="green"
        />
      </div>
    </div>
  );
}
