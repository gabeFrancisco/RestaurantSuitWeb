import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryTable from "../../components/CategoryTable/CategoryTable";
import SectionTitle from "../../widgets/SectionTitle/SectionTitle";

export default function CategoriesPage() {
  const navigate = useNavigate();
  return (
    <div className="CategoriesPage PageFade">
      <SectionTitle
        title="Categorias"
        subtitle="Aqui você manipula suas categorias de produtos."
      />

      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            navigate("/newCategory")
          }}
        > 
          <i className="fas fa-plus  fa-fw"></i>Nova categoria
        </button>
      </div>
      <CategoryTable />
    </div>
  );
}
