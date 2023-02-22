import React from "react";
import CategoryTable from "../../components/CategoryTable/CategoryTable";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

export default function CategoriesPage() {
  return (
    <div className="CategoriesPage PageFade">
      <SectionTitle
        title="Categorias"
        subtitle="Aqui você manipula suas categorias de produtos."
      />

      <div>
        <button className="btn btn-success">Nova categoria</button>
      </div>
      <CategoryTable/>
    </div>
  );
}
