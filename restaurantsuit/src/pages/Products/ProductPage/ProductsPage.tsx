import React from "react";
import { useNavigate } from "react-router-dom";
import ProductTable from "../../../components/ProductTable/ProductTable";
import SectionTitle from "../../../widgets/SectionTitle/SectionTitle";

// import './ProductPage.css'

export default function ProductPage() {
  const navigate = useNavigate();

  return (
    <div className="PageFade">
      <SectionTitle
        title="Produtos"
        subtitle="Aqui voce gerencia todos os seus produtos. de acordo com seus grupos de trabalho"
      />

      <button
        className="btn btn-primary"
        onClick={() => navigate("/newProduct")}
      >
        <i className="fas fa-plus  fa-fw"></i>
        Novo produto!
      </button>
      <ProductTable isOrder={false} hasActions/>
    </div>
  );
}
