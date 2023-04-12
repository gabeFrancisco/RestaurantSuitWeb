import React from "react";
import ProductForm from "../../../components/ProductForm/ProductForm";
import SectionTitle from "../../../widgets/SectionTitle/SectionTitle";

export default function UpdateProductPage() {
  return(
    <div className="PageFade">
      <SectionTitle title="Atualizar produto"/>
      <ProductForm isEdit={true}/>
    </div>
  )
}
