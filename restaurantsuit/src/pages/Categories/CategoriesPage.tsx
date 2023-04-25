import React, { useState } from "react";
import CategoryBox from "../../components/Boxes/CategoryBox";
import CategoryTable from "../../components/CategoryTable/CategoryTable";
import SectionTitle from "../../widgets/SectionTitle/SectionTitle";

export default function CategoriesPage() {
  const [categoryBox, setCategoryBox] = useState(false);

  return (
    <div className="CategoriesPage PageFade">
      <SectionTitle
        title="Categorias"
        subtitle="Aqui você manipula suas categorias de produtos."
      />

      <div>
        <button
          className="btn btn-primary"
          onClick={() => setCategoryBox(true)}
        >
          <i className="fas fa-plus  fa-fw"></i>Nova categoria
        </button>
      </div>
      {categoryBox ? <CategoryBox closeHandler={() => setCategoryBox(false)}/> : null}
      <CategoryTable />
    </div>
  );
}
