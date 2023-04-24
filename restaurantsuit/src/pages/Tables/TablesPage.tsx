import React from "react";
import SectionTitle from "../../widgets/SectionTitle/SectionTitle";
import TablesTable from "../../components/TablesTable/TablesTable";

export default function TablesPage() {
  return (
    <div className="PageFade">
      <SectionTitle title="Mesas" subtitle="Gerencie suas mesas aqui." />
      <TablesTable />
    </div>
  );
}
