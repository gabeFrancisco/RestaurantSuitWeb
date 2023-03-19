import React from "react";

import './DashboardCard.css'

interface Props {
  title: string;
  data: number;
  theme: string;
  currency: boolean;
}

export default function DashboardCard(props: Props) {
  return (
    <div className="DashboardCard">
      {props.title}
      {props.currency ? (
        <p>{`R$${props.data.toFixed(2)}`}</p>
      ) : (
        <p>{props.data}</p>
      )}
    </div>
  );
}
