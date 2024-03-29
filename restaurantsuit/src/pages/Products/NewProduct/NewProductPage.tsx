import React, { useEffect } from "react";
import ProductForm from "../../../components/ProductForm/ProductForm";
import SectionTitle from "../../../widgets/SectionTitle/SectionTitle";

export default function NewProductPage() {

  return (
    <div className="PageFade">
      <SectionTitle title="Novo produto" />
      <ProductForm isEdit={false}/>
    </div>
  );
}
