import React, { useEffect, useState } from "react";
import Card from "../../widgets/Card/Card";
import Column from "../../widgets/Column/Column";
import {
  AlignItems,
  JustifyContent,
} from "../../widgets/FlexProperties/FlexProperties";
import Row from "../../widgets/Row/Row";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchAllTables } from "../../store/features/tablesSlice";
import { ProductOrder } from "../../models/interfaces/ProductOrder";
import ProductOrderTable from "../ProductOrderTable/ProductOrderTable";
import { useNavigate } from "react-router-dom";
import ProductOrderModal from "../../modals/ProductOrderModal";

interface Props {
  isEdit: boolean;
}

export default function OrderForm(props: Props) {
  const navigate = useNavigate();
  const tables = useAppSelector((state) => state.tables.tableList);
  const orderSheet = useAppSelector((state) => state.orderSheets.orderSheet);
  const productOrders = useAppSelector(
    (state) => state.productOrders.productOrderList
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllTables());
  }, []);

  const [productOrderModal, setProductOrderModal] = useState(false);
  const closeProductOrderModal = () => setProductOrderModal(false);

  return (
    <div className="PageFade m-2">
      <div className="OrderForm">
        {productOrderModal ? (
          <ProductOrderModal closeHandler={closeProductOrderModal} />
        ) : null}
        <Row
          alignItems={AlignItems.Stretch}
          justifyContent={JustifyContent.Left}
        >
          <button
            className="btn btn-primary"
            onClick={() => setProductOrderModal(true)}
          >
            <i className="fas fa-plus fa-fw"></i>Adiconar produto
          </button>
          <select className="btn btn-success" name="tableId" id="tableId">
            <option value="" disabled selected>
              Número da mesa{" "}
            </option>
            {tables ? (
              tables.map((tab) => {
                return <option value={tab.id}>{tab.id}</option>;
              })
            ) : (
              <option>Não há mesas!</option>
            )}
          </select>
          <button className="btn btn-warning">
            <i className="fas fa-user-group fa-fw"></i>Adicionar cliente
          </button>
          <div>Cliente: Nenhum selecionado</div>
        </Row>
        <ProductOrderTable productOrderList={productOrders} hasQuantity hasActions={false}/>
        <Row
          alignItems={AlignItems.Center}
          justifyContent={JustifyContent.Center}
        >
          <button className="btn btn-danger" onClick={() => navigate(-1)}>
            Cancelar
          </button>
          <button className="btn btn-primary">
            <i className="fas fa-ticket fa-fw"></i>Criar pedido!
          </button>
        </Row>
      </div>
    </div>
  );
}
