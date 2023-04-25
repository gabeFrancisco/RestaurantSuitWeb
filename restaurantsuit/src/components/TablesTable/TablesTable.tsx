import React, { useEffect, useState } from "react";
import TableRow from "../TableRows/TableRow";
import { Loader } from "../../widgets/Loading/Loader";
import { useAppDispatch, useAppSelector } from "../../store/store";
import Center from "../../widgets/Center/Center";
import { fetchAllTables } from "../../store/features/tablesSlice";

export default function TablesTable() {
  const tables = useAppSelector((state) => state.tables.tableList);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllTables()).then(() => setLoaded(true))
  })

  return (
    <div className="Table-Area">
      {!loaded ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        <table className="PageFade">
          <thead>
            <tr>
              <th>Número</th>
              <th>Cadeiras</th>
              <th>Situação</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {tables.length > 0 ? (
              tables.map((el) => (
                <TableRow
                  id={el.id}
                  number={el.number}
                  chairs={el.chairs}
                  isBusy={el.isBusy}
                />
              ))
            ) : (
              <tr className="center">
                <h2 className="m-3">Por enquanto não há nada aqui ;)</h2>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
