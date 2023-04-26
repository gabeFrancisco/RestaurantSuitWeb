import React, { useEffect } from "react";

import "./OrderCard.css";
import Card from "../../widgets/Card/Card";
import Row from "../../widgets/Row/Row";
import {
  AlignItems,
  JustifyContent,
} from "../../widgets/FlexProperties/FlexProperties";
import Column from "../../widgets/Column/Column";
import { ProductOrder } from "../../models/interfaces/ProductOrder";
import orderStatusService from "../../services/orderStatusService";

interface Props {
  id: number;
  orderState: number;
  openBy: string;
  tableId: number;
  customerId: number;
  productOrders: Array<ProductOrder>;
}

export default function OrderCard(props: Props) {
  const orderState = orderStatusService.returnStatus(props.orderState);

  return (
    <div className="OrderCard">
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
              justifyContent={JustifyContent.Center}
            >
              <div className="badge-green m-1">
                <h2>Pedido #{props.id}</h2>
              </div>

              <div className="badge-yellow m-1">
                <h2>Mesa #{props.tableId}</h2>
              </div>
            </Row>
            <p>Pedido aberto por: {props.openBy}</p>
          </Column>
          <Column
            alignItems={AlignItems.Center}
            justifyContent={JustifyContent.Center}
          >
            <h2 className="m-2">
              {/* {props.productOrders.map((el) => (
                <>
                  <ProductRow
                    id={el.product.id}
                    productName={el.product.name}
                    categoryId={el.product.categoryId}
                    categoryName={el.product.categoryName}
                    price={el.product.price}
                    quantity={el.product.quantity}
                  />
                </>
              ))} */}
              Estado: {orderState}
            </h2>
          </Column>
        </Row>
      </Card>
    </div>
  );
}
