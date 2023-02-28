import React from "react";
import Card, { Directions } from "../../Widgets/Card/Card";
import SectionTitle from "../../Widgets/SectionTitle/SectionTitle";

export default function Dashboard() {
  return (
    <div className="PageFade">
      <SectionTitle
        title="Painel"
        subtitle="Aqui você verá um resumo de todo o seu negócio!"
      />

      <Card bgColor="#2A79C6" whiteText={true} gradient={{
        direction: Directions.right,
        color1: "#eee",
        color2: "#2A79C6"
      }}>
        <h2>Heaven is comming!</h2>
      </Card>
    </div>
  );
}
