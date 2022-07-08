/* eslint-disable react-hooks/exhaustive-deps */
import { getDespesasMes } from "./backend";
import { Box, Container, Tab, Tabs } from "@material-ui/core";
import { formatNumbers } from "../helpers";
import { useEffect, useState } from "react";
import { TableDespesas } from "./TableDespesas";
import { TableResumo } from "./TableResumo";
import { useParams, useHistory } from "react-router-dom";
import { SelectedAnoMes } from "./SelectAnoMes";
import { HeaderLogin } from "./HeaderLogin";
import { useDespesas } from "./useDespesas";

export function Despesas() {
  const { anoMes } = useParams<{ anoMes: string }>();
  let campos = anoMes.split("-");

  let history = useHistory();

  // const [despesaTotal, setDespesaTotal] = useState(0);
  // const [despesasMes, setDespesasMes] = useState<any[]>([]);
  const [aba, setAba] = useState(1);

  const { despesasMes, despesaTotal, despesasCategoria } = useDespesas(anoMes);

  const toggleRoute = (novoAnoMes: string) => {
    history.push(`/despesas/${novoAnoMes}`);
  };

  return (
    <>
      <HeaderLogin />

      <Container>
        <Box display="flex" flexDirection="column">
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box>
              <SelectedAnoMes anoMes={anoMes} toggleRoute={toggleRoute} />
            </Box>
            <Box alignSelf="center">
              <span>Despesas total: {formatNumbers(despesaTotal)}</span>
            </Box>
          </Box>
          <Tabs
            centered
            value={aba}
            onChange={(e, novaAba) => {
              setAba(novaAba);
            }}
          >
            <Tab label="Resumo" />
            <Tab label="Despesas" />
          </Tabs>
          <Box>
            {aba === 0 ? (
              <TableResumo despesas={despesasCategoria} />
            ) : (
              <TableDespesas despesas={despesasMes} />
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}
