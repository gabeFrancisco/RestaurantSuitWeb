import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
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
    <div className="PageFade">
      <h1>Página não encontrada :(</h1>
      <h3>Talvez a sua URL esteja incorreta ou está página não exista!</h3>

      <h3>Redirecionando em {countdown} segundos</h3>
    </div>
  );
}
