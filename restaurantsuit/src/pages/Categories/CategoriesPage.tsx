import React from "react";
import CategoryTable from "../../components/CategoryTable/CategoryTable";
import SectionTitle from "../../Widgets/SectionTitle/SectionTitle";

export default function CategoriesPage() {
  return (
    <div className="CategoriesPage PageFade">
      <SectionTitle
        title="Categorias"
        subtitle="Aqui você manipula suas categorias de produtos."
      />

      <div>
        <button className="btn btn-success"><i className="fas fa-plus  fa-fw"></i>Nova categoria</button>
      </div>
      <CategoryTable/>
    </div>
  );
}
