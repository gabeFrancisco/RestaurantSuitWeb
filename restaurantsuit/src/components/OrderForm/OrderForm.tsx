import React, { useEffect } from "react";
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

interface Props {
  isEdit: boolean;
}

export default function OrderForm(props: Props) {
  const tables = useAppSelector(state => state.tables.tableList)
  const productOrders = new Array<ProductOrder>();
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllTables())
  })

  return (
    <div className="PageFade m-2">
        <div className="OrderForm">
          <Column
            alignItems={AlignItems.FlexStart}
            justifyContent={JustifyContent.Left}
          >
            <Row
              alignItems={AlignItems.Baseline}
              justifyContent={JustifyContent.Left}
            >
              <label>Número da mesa:</label>
              <select name="tableId" id="tableId">
                {tables ? (
                  tables.map(tab => {
                    return <option value={tab.id}>{tab.id}</option>
                  })
                ) : (<option>Não há mesas!</option>)}
              </select>
              
            </Row>
          </Column>
        </div>
    </div>
  );
}
