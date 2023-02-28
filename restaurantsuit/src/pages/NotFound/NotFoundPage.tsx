import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import './NotFoundPage.css'

export default function NotFoundPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      navigate("/dashboard");
    }, 5000);
  }, []);

  useEffect(() => {
    {
      setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
  }, [countdown])

  return (
    <div className="NotFound PageFade">
      <h1>Página não encontrada :(</h1>
      <h3>Talvez a sua URL esteja incorreta ou esta página não existe!</h3>

      <h3>Redirecionando em {countdown} segundos</h3>
    </div>
  );
}
