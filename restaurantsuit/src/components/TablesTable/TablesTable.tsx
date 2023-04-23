import React from "react";
import TableRow from "../TableRows/TableRow";

export default function TablesTable() {
  return (
    <div className="Table-Area">
      <div className="Table-Area">
        <table>
          <thead>
            <tr>
              <th>Número</th>
              <th>Cadeiras</th>
              <th>Situação</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <TableRow id={3} number={7} chairs={4} isBusy={true} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
