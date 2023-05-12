import React, { useEffect, useState } from "react";

import "./OrderCard.css";
import Card from "../../widgets/Card/Card";
import Row from "../../widgets/Row/Row";
import {
  AlignItems,
  JustifyContent,
} from "../../widgets/FlexProperties/FlexProperties";
import Column from "../../widgets/Column/Column";
import { ProductOrder } from "../../models/interfaces/ProductOrder";
import orderStatusService from "../../services/orderStateService";
import ProductOrderTable from "../ProductOrderTable/ProductOrderTable";
import { OrderSheet } from "../../models/interfaces/OrderSheet";

export default function OrderCard({ orderSheet }: { orderSheet: OrderSheet }) {
  const orderState = orderStatusService.returnStatus(orderSheet.orderState);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="OrderCard"
      onClick={() =>
        showDetails ? setShowDetails(false) : setShowDetails(true)
      }
    >
      <Card>
        <Row
          alignItems={AlignItems.Center}
          justifyContent={JustifyContent.SpaceBetween}
        >
          <Column
            alignItems={AlignItems.FlexStart}
            justifyContent={JustifyContent.Center}
          >
            <Row
              alignItems={AlignItems.Center}
              justifyContent={JustifyContent.SpaceBetween}
            >
              <div className="badge-green m-1">
                <h2>Pedido #{orderSheet.id}</h2>
              </div>

              <div className="badge-yellow m-1">
                <h2>Mesa #{orderSheet.tableId}</h2>
              </div>
            </Row>
            {showDetails ? (
              <div className="Details">
                <ProductOrderTable
                  productOrderList={orderSheet.productOrders}
                  hasQuantity={false}
                  hasActions
                />
                <p>Pedido aberto por: {orderSheet.openBy}</p>
              </div>
            ) : (
              <div />
            )}
          </Column>
          <Column
            alignItems={AlignItems.Center}
            justifyContent={JustifyContent.Center}
          >
            <h2 className="m-2">{orderState}</h2>
          </Column>
        </Row>
      </Card>
    </div>
  );
}
