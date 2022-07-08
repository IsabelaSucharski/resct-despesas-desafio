import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { formatNumbers } from "../helpers";

export function TableResumo(props: any) {
  const [despesas, setDespesas] = useState<any[]>([]);

  useEffect(() => {
    setDespesas(props.despesas);
  }, [props.despesas]);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Categoria</TableCell>
            <TableCell align="right">Valor (R$)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {despesas.map((d, index) => {
            return (
              <TableRow key={index}>
                <TableCell key={d.id}>{d.categoria}</TableCell>
                <TableCell key={d.id} align="right">{formatNumbers(d.despesaTotal)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
