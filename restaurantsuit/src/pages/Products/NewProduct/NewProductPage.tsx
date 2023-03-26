import React from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../../../widgets/SectionTitle/SectionTitle";

export default function NewProductPage() {
  const navigate = useNavigate();
  return (
    <div className="PageFade">
      <SectionTitle title="Novo produto" />
      <button className="btn btn-danger" onClick={() => navigate(-1)}>Cancel</button>
    </div>
  );
}
