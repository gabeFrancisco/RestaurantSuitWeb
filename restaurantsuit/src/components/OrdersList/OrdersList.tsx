import React, { useEffect, useState } from "react";

import "./OrdersList.css";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { fetchAllOrderSheets } from "../../store/features/orderSheetSlice";
import Center from "../../widgets/Center/Center";
import { Loader } from "../../widgets/Loading/Loader";
import OrderCard from "./OrderCard";

export default function OrdersList() {
  const orderSheets = useAppSelector(
    (state) => state.orderSheets.orderSheetList
  );
  const [loaded, setLoaded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllOrderSheets()).then(() => setLoaded(true));
  }, []);

  return (
    <div className="OrdersList m2">
      {!loaded ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <>
          {orderSheets.length > 0 ? (
            orderSheets.map((orderSheet) => (
              <OrderCard
              orderSheet={orderSheet}
              />
            ))
          ) : (
            <Center>
              <h2 className="m-3">Por enquanto não há nada aqui ;)</h2>
            </Center>
          )}
        </>
      )}
    </div>
  );
}
